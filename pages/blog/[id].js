import Image from "next/image";
import Layout from '../../components/layout/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { MDXRemote } from "next-mdx-remote";
import YouTube from "../../components/youtube/youtube";
import "highlight.js/styles/atom-one-dark.css"; //required for rehype plugin to highlight code

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ postData }) {

    const pageMeta = {
      type: 'article',
      title: postData.title,
    }

    return (
      <Layout pageMeta={pageMeta}>
        <article className="max-w-screen-lg mx-auto py-12 space-y-16">
          <header>
            <h1 className='max-w-screen-md lg:text-6xl md:text-5xl sm: text-4xl'>{postData.title}</h1>
          </header>
          <div className='text-gray-500'>
            <Date dateString={postData.date} />
          </div>
          {/* Author */}
          <main>
            <div class="prose dark:prose-invert">
              <MDXRemote {...postData.mdxSource} components={{ YouTube, Image }} />
            </div>
          </main>
        </article>
      </Layout> 
    );
  }