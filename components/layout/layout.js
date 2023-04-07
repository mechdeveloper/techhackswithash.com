import Head from 'next/head';
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { useRouter } from 'next/router'

const Layout = ({ children, pageMeta }) => {
  
  const router = useRouter();

  const meta={
    title: 'Tech hacks with Ash',
    description: 'Tech blogs by Ashish Singh Baghel',
    type: 'website',
    ...pageMeta,
  };


  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
        <link rel="icon" href='/favicon.ico'></link>
        {/* Open Graph */}
        <meta property='og:url' content={`https://techhackswithash.com${router.asPath}`}/>
        <meta property='og:type' content={meta.type}/>
        <meta property='og:site_name' content='techhackswithash'/>
        <meta property='og:description' content={meta.description}/>
        <meta property='og:title' content={meta.title}/>
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      
      <div className='min-h-screen flex flex-col'>
        <Header />
          <main className='flex-grow container mx-auto px-4 sm:px-6'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

// export default function Layout({ children, home }) {
//   return (
//     <div className={styles.container}>
//       <Nav />
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="Learn how to build a personal website using Next.js"
//         />
//         <meta
//           property="og:image"
//           content={`https://og-image.vercel.app/${encodeURI(
//             siteTitle,
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//         <meta name="og:title" content={siteTitle} />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>
//       <header className={styles.header}>
//         {home ? (
//           <>
//             <Image
//               priority
//               src="/images/profile.jpg"
//               className={utilStyles.borderCircle}
//               height={144}
//               width={144}
//               alt=""
//             />
//             <h1 className={utilStyles.heading2Xl}>{name}</h1>
//           </>
//         ) : (
//           <>
//             <Link href="/">
//               <Image
//                 priority
//                 src="/images/profile.jpg"
//                 className={utilStyles.borderCircle}
//                 height={108}
//                 width={108}
//                 alt=""
//               />
//             </Link>
//             <h2 className={utilStyles.headingLg}>
//               <Link href="/" className={utilStyles.colorInherit}>
//                 {name}
//               </Link>
//             </h2>
//           </>
//         )}
//       </header>
//       <main>{children}</main>
//       {!home && (
//         <div className={styles.backToHome}>
//           <Link href="/">← Back to home</Link>
//         </div>
//       )}
//     </div>
//   );
// }