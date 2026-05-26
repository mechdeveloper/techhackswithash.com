import { useState } from 'react';
import Image from "next/image";
import Layout from '../../components/layout/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { MDXRemote } from "next-mdx-remote";
import YouTube from "../../components/youtube/youtube";
import "highlight.js/styles/atom-one-dark.css";
import config from '../../lib/config';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return { paths, fallback: false };
}

function TableOfContents({ headings }) {
  if (!headings || headings.length < 3) return null;
  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.slug} style={{ paddingLeft: h.level === 3 ? '0.75rem' : '0' }}>
            <a
              href={`#${h.slug}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ShareButtons({ title, id }) {
  const [copied, setCopied] = useState(false);
  const postUrl = `${config.siteUrl}/blog/${id}`;
  const encoded = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(title);
  const twitterHandle = config.social.twitter.split('/').pop();

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}&via=${twitterHandle}`;

  const copyLink = () => {
    navigator.clipboard.writeText(postUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Share this post</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-black dark:bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-700 text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X / Twitter
        </a>
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy link
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function BlogPost({ postData }) {
  const pageMeta = {
    type: 'article',
    title: postData.title,
    description: postData.excerpt || postData.title,
    date: postData.date,
  };

  const hasToc = postData.headings?.length >= 3;

  return (
    <Layout pageMeta={pageMeta}>
      <div className="max-w-screen-xl mx-auto py-12 px-0">

        {/* Post header */}
        <header className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">{postData.title}</h1>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
            <Date dateString={postData.date} />
            {postData.readingTime && (
              <>
                <span>·</span>
                <span>{postData.readingTime} min read</span>
              </>
            )}
          </div>
          {postData.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {postData.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Mobile TOC */}
        {hasToc && (
          <details className="xl:hidden mb-8 rounded-lg border border-gray-100 dark:border-gray-800 p-4">
            <summary className="text-sm font-semibold cursor-pointer select-none">Table of contents</summary>
            <div className="mt-3">
              <TableOfContents headings={postData.headings} />
            </div>
          </details>
        )}

        {/* Content + sidebar grid */}
        <div className={hasToc ? 'xl:grid xl:grid-cols-[1fr_220px] xl:gap-16 xl:items-start' : ''}>
          <main>
            <article className="prose dark:prose-dark sm:prose-lg max-w-none">
              <MDXRemote {...postData.mdxSource} components={{ YouTube, Image }} />
            </article>
            <ShareButtons title={postData.title} id={postData.id} />
          </main>

          {/* Desktop TOC sidebar */}
          {hasToc && (
            <aside className="hidden xl:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <TableOfContents headings={postData.headings} />
            </aside>
          )}
        </div>

      </div>
    </Layout>
  );
}
