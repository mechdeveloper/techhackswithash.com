import Head from 'next/head';
import Image from "next/image";
import Layout from '../../components/layout/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
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
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
          <MDXRemote {...postData.mdxSource} components={{ YouTube, Image }} />
        </article>
      </Layout>
    );
  }