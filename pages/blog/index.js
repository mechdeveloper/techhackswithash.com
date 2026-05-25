import { useState } from 'react';
import Card from '../../components/card/card';
import Layout from '../../components/layout/layout';
import { getSortedPostsData } from '../../lib/posts';
import config from '../../lib/config';

export async function getStaticProps() {
  try {
    const allPostsData = await getSortedPostsData();
    return { props: { allPostsData } };
  } catch (error) {
    return { props: { allPostsData: [] } };
  }
}

export default function Blog({ allPostsData }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');

  const allTags = [...new Set(allPostsData.flatMap((p) => p.tags || []))].sort();

  const filtered = allPostsData.filter((post) => {
    const matchesQuery =
      !query.trim() ||
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(query.toLowerCase()) ||
      post.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    const matchesTag = !activeTag || post.tags?.includes(activeTag);
    return matchesQuery && matchesTag;
  });

  const isFiltered = query.trim() || activeTag;

  return (
    <Layout
      pageMeta={{
        title: `Blog – ${config.siteName}`,
        description: 'Articles on Azure, DevOps, Kubernetes, Docker, and cloud-native engineering.',
      }}
    >
      <section className="text-center pt-12 sm:pt-24 pb-10">
        <h1 className="text-4xl sm:text-7xl font-bold capitalize mb-8">Blog Posts</h1>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-6">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search posts…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Tag chips */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  activeTag === tag
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {isFiltered && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            {activeTag && <> tagged <strong className="text-gray-700 dark:text-gray-300">{activeTag}</strong></>}
            {query && activeTag && ' matching '}
            {query && <> &ldquo;{query}&rdquo;</>}
            {' — '}
            <button
              onClick={() => { setQuery(''); setActiveTag(''); }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              clear
            </button>
          </p>
        )}
      </section>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-screen-lg mx-auto pb-16">
        {filtered.length > 0 ? (
          filtered.map((post) => <Card key={post.id} {...post} />)
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No posts found.{' '}
            <button
              onClick={() => { setQuery(''); setActiveTag(''); }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </p>
        )}
      </div>
    </Layout>
  );
}
