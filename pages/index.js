import Link from 'next/link';
import Layout from '../components/layout/layout';
import Card from '../components/card/card';
import { getSortedPostsData } from '../lib/posts';
import { BookOpenIcon, ArrowRightIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import config from '../lib/config';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '11', label: 'Apps Migrated to Azure' },
  { value: '$100K+', label: 'Cost Savings Delivered' },
  { value: '3+', label: 'Conference Talks' },
];

export default function Home({ allPostsData }) {
  const recentPosts = allPostsData.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 sm:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Cloud Solution Architect &middot; Mumbai, India
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="block">Hi, I&apos;m Ash</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            I build cloud platforms
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          {config.authorBio} I write about the tech I work with every day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            <BookOpenIcon className="w-5 h-5" />
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 font-medium transition-colors"
          >
            About Me
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-xl border border-gray-100 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/50"
          >
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Latest posts */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Speaking teaser */}
      <section className="mb-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
          <MicrophoneIcon className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Speaking &amp; Talks</h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-6">
          I speak at tech conferences and community events on Azure, DevOps, Kubernetes, and MLOps.
        </p>
        <Link
          href="/speaking"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
        >
          View my talks <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>
    </Layout>
  );
}
