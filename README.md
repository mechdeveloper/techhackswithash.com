[![Open in Dev Container](https://img.shields.io/static/v1?label=Dev%20Container&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/mechdeveloper/techhackswithash.com.git)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/mechdeveloper/techhackswithash.com)

# techhackswithash.com

Personal blog and portfolio site for **Ashish Singh Baghel** — Cloud Solution Architect writing about Azure, DevOps, Kubernetes, and AI-driven engineering.

🌐 **Live site:** [techhackswithash.com](https://techhackswithash.com)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) — Pages Router, Static Site Generation |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) |
| Content | MDX via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) |
| Syntax highlighting | [rehype-highlight](https://github.com/rehypejs/rehype-highlight) + highlight.js |
| Dark mode | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [@heroicons/react](https://heroicons.com) |
| Deployment | [Vercel](https://vercel.com) |

## Project Structure

```
├── pages/              # Next.js pages
│   ├── index.js        # Homepage — hero, stats, videos, latest posts
│   ├── about.js        # About — story, career timeline, skills, certifications
│   ├── blog/
│   │   ├── index.js    # Blog listing
│   │   └── [id].js     # Dynamic blog post page
│   ├── speaking.js     # Speaking — talks and events
│   └── videos.js       # Videos — curated YouTube content
├── posts/              # Blog content (MDX files)
├── components/         # Reusable React components
│   ├── card/           # Blog post card
│   ├── layout/         # Page layout wrapper with SEO meta tags
│   ├── logo/           # Site logo
│   ├── sections/       # Header and Footer
│   ├── social/         # Social icon links
│   └── youtube/        # YouTube embed component
├── lib/
│   ├── config.js       # Site-wide config (name, author, social links)
│   └── posts.js        # Blog post data utilities
├── public/             # Static assets
└── styles/             # Global CSS
```

## Quick Start

```bash
git clone https://github.com/mechdeveloper/techhackswithash.com.git
cd techhackswithash.com
npm install
npm run dev
```

Site is now running at [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Writing a Blog Post

Create a new folder under `/posts` using the format `YYYY-MM-DD-post-slug/` containing an `index.mdx` file:

```
posts/
└── 2026-05-21-my-new-post/
    └── index.mdx
```

Start the file with a YAML frontmatter block:

````mdx
---
title: "My Post Title"
date: "2026-05-21"
excerpt: "A short description shown on the blog listing page."
---

Your content here. Supports Markdown, GFM (tables, task lists), and JSX components.

## Code blocks are syntax highlighted

```bash
echo "hello world"
```

## Embed a YouTube video

<YouTube id="VIDEO_ID" />
````

The post will be picked up automatically on the next build — no registration needed.

## Adding a Video

Open `pages/videos.js` and add an entry to the `videos` array:

```js
{
  id: 'YOUTUBE_VIDEO_ID',  // the part after ?v= in the YouTube URL
  title: 'Your Video Title',
  description: 'A short description of what the video covers.',
  tags: ['Azure', 'DevOps'],
  isLive: false,           // set to true for live stream recordings
},
```

The thumbnail is fetched automatically from YouTube. Clicking it plays the video inline.

## Site Configuration

All site-wide settings live in `lib/config.js`:

```js
const config = {
  siteUrl: 'https://techhackswithash.com',
  siteName: 'Tech hacks with Ash',
  author: 'Ashish Singh Baghel',
  social: {
    github: '...',
    linkedin: '...',
    youtube: '...',
    twitter: '...',
  },
};
```

## Deployment

The site is deployed on **Vercel** with automatic preview deployments for every branch push. Merging to `main` triggers a production deployment.

To deploy your own fork, click the button at the top of this README or run:

```bash
npm i -g vercel
vercel
```
