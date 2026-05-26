import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

const postsDirectory = path.join(process.cwd(), 'posts');

function readingTime(content) {
  const text = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function slugify(text) {
  // Match github-slugger (used by rehype-slug) exactly:
  // replace spaces with hyphens, then strip everything that isn't word char or hyphen.
  // Do NOT collapse multiple hyphens — "| .ext" → "--ext" is intentional.
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]/g, '');
}

function cleanHeadingText(raw) {
  return raw
    .trim()
    .replace(/\\(.)/g, '$1')  // unescape markdown escapes: \. → .
    .replace(/[*_`[\]]/g, '') // strip bold/italic/code/link syntax; keep ( ) | .
    .trim();
}

function extractHeadings(content) {
  const headings = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // ATX-style: ## Heading or ### Heading
    const atxMatch = line.match(/^(#{2,3})\s+(.+?)(?:\s+#+)?$/);
    if (atxMatch) {
      const text = cleanHeadingText(atxMatch[2]);
      if (text) headings.push({ level: atxMatch[1].length, text, slug: slugify(text) });
      continue;
    }

    // Setext-style: text line followed by === (h1) or --- (h2) underline
    if (i + 1 < lines.length) {
      const nextLine = lines[i + 1].trim();
      const trimmed = line.trim();
      if (trimmed.length >= 2 && !trimmed.startsWith('#') && !trimmed.startsWith('>') && !trimmed.startsWith('|')) {
        if (/^={2,}$/.test(nextLine)) {
          // H1 — skip, don't include in TOC
          i++;
        } else if (/^-{2,}$/.test(nextLine)) {
          // H2
          const text = cleanHeadingText(trimmed);
          if (text) headings.push({ level: 2, text, slug: slugify(text) });
          i++;
        }
      }
    }
  }
  return headings;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  return {
    id,
    mdxSource,
    readingTime: readingTime(matterResult.content),
    headings: extractHeadings(matterResult.content),
    ...matterResult.data,
  };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    if (fs.lstatSync(path.join(postsDirectory, fileName)).isDirectory()) {
      fileName = fileName + '/index.mdx';
    }

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      readingTime: readingTime(matterResult.content),
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.mdx$/, '') },
  }));
}
