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
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim().replace(/\*\*|__|\*|_|`/g, '');
    headings.push({ level, text, slug: slugify(text) });
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
