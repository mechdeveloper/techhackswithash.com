import Card from '../../components/card/card'
import Layout, { siteTitle } from '../../components/layout/layout';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {

  try {
    const allPostsData = await getSortedPostsData();

    return {
      props: {
        allPostsData,
      },
    };
  } catch(error) {
    return {
      props: {
        data: []
      }
    }
  }

}

export default function Blog ({ allPostsData }) {
  return (
      <Layout>
          <section className='text-center pt-12 sm:pt-24 pb-16'>
            <h1 className='text-4xl sm:text-7xl font-bold capitalize'>
              Blog Posts
            </h1>
          </section>

          <div className='grid sm:grid-cols-1 gap-8 max-w-screen-lg mx-auto'>
            {allPostsData.map(post => <Card key={post.id} {...post} />)}
          </div>
      </Layout>
  );
};

