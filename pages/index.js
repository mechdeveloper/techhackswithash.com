import Link from 'next/link';
import Layout from '../components/layout/layout';
import { getSortedPostsData } from '../lib/posts';
import { BookOpenIcon } from '@heroicons/react/24/solid';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
      <Layout>
        {/* Hero section */}
        <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
          {/* Headlines */}
          <div className='space-y-4 max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-7xl font-bold capitalize'> 
              <span className='block'>Tech Blogs</span>
              <span className='block'>by Ashish</span>
            </h1>
            <h2 className='text-xl sm:text-2xl'>
              Cloud, DevOps, Azure, Serverless, Containers and Secuirty
            </h2>
          </div>

          {/* CTA */}
          <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Link href="/blog">
              <div className='w-full bg-transparent text-blue-600 px-6 py-3 rounded-md text-lg sm:text-xl border-2 border-blue-600 focus:outline-none whitespace-nowrap flex justify-center items-center space-x-2'>
                <BookOpenIcon className='w-6 h-6 flex-shrink-0'/>
                <span>Read the blog</span>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
  )
}

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Solutions Architect (Cloud & DevOps)</p>
//         {/* <p>
//           Digital technologies professional who loves to learn, believes in sharing knowledge, creates tech YouTube videos, speaks in tech conferences / meetup groups. Currently working with one of the major financial services client in Olso Norway, helping in their digitalization journey by leveraging latest technologies, automating business processes and modernizing business applications.
//         </p> */}
//       </section>

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/blog/${id}`}>{title}</Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
        
//       </section>

//     </Layout>
//   );
// }