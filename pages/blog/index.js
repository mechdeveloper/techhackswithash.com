import Card from '../../components/card/card'
import Layout from '../../components/layout/layout';
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
        allPostsData: []
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

          <div className='grid grid-cols-1 gap-6 sm:gap-8 max-w-screen-lg mx-auto pb-8'>
            {allPostsData.map(post => <Card key={post.id} {...post} />)}
          </div>
      </Layout>
  );
};

