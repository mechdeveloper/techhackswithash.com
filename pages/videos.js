import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layout/layout';
import config from '../lib/config';

const videos = [
  {
    id: 'xj9OiJL56pM',
    title: 'Verified Commits on GitHub from Windows PC (GPG Keys)',
    description:
      'How to set up GPG key signing for Git commits on a Windows PC so your commits show as Verified on GitHub.',
    tags: ['GitHub', 'Git', 'Security', 'Windows'],
  },
  {
    id: 'sHyZipgbYAo',
    title: 'Docker Engine Enterprise on Windows Server 2019 VM',
    description:
      'Beginner-friendly walkthrough of installing and running Docker Engine Enterprise on a Windows Server 2019 virtual machine.',
    tags: ['Docker', 'Windows Containers', 'Windows Server'],
  },
  {
    id: 'JZXtYTILxIQ',
    title: 'Remote Management of Docker Host over TCP Encrypted with TLS',
    description:
      'Secure remote management of a Docker host over TCP by encrypting the connection with TLS certificates — practical security for container infrastructure.',
    tags: ['Docker', 'Windows Containers', 'TLS', 'Security'],
  },
  {
    id: 'isBTdCFU9I4',
    title: 'Install Windows Server 2022 VM on Windows 10 using VirtualBox',
    description:
      'Step-by-step guide to creating a Windows Server 2022 virtual machine on a Windows 10 host using Oracle VirtualBox.',
    tags: ['Windows Server', 'VirtualBox', 'Virtualization'],
  },
  {
    id: 'NdZlgq8D8oE',
    title: 'Azure Serverless Containers | Azure Container Instances via Docker CLI',
    description:
      'Complete hands-on guide to deploying serverless containers on Azure using Azure Container Instances, controlled entirely through the Docker CLI.',
    tags: ['Azure', 'Containers', 'Serverless', 'ACI'],
  },
  {
    id: '0pNZ2UWkPfQ',
    title: 'GitHub Codespaces for Azure with Terraform Cloud',
    description:
      'Use GitHub Codespaces as a cloud development environment to deploy and manage Azure infrastructure with Terraform Cloud — no local setup required.',
    tags: ['GitHub Codespaces', 'Terraform', 'Azure', 'IaC'],
  },
  {
    id: 'REDg2uIqDcc',
    title: 'Containers as Development Environments',
    description:
      'Live session exploring how containers can be used as consistent, reproducible development environments — eliminating "works on my machine" forever.',
    tags: ['Containers', 'DevEx', 'Docker'],
    isLive: true,
  },
];

function VideoCard({ id, title, description, tags, isLive }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 overflow-hidden hover:border-blue-200 dark:hover:border-blue-700/50 transition-colors group">
      {/* Thumbnail / Player */}
      <div className="relative w-full aspect-video bg-gray-900">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full focus:outline-none"
            aria-label={`Play ${title}`}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {isLive && (
              <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold rounded bg-red-600 text-white tracking-wide">
                LIVE
              </span>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <Layout
      pageMeta={{
        title: `Videos – ${config.siteName}`,
        description:
          'Video tutorials by Ashish Singh Baghel covering Azure, DevOps, Docker, Kubernetes, Terraform, and cloud-native engineering.',
      }}
    >
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-6">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Videos
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Hands-on tutorials on Azure, DevOps, Docker, Kubernetes, Terraform, and more.
          Click any thumbnail to watch directly.
        </p>
        <a
          href={config.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Subscribe on YouTube
        </a>
      </section>

      {/* Video grid */}
      <section className="max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
