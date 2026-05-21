import Head from 'next/head';
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { useRouter } from 'next/router'
import config from '../../lib/config';

const Layout = ({ children, pageMeta }) => {

  const router = useRouter();

  const meta = {
    title: config.siteName,
    description: config.siteDescription,
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
        <meta property='og:url' content={`${config.siteUrl}${router.asPath}`}/>
        <meta property='og:type' content={meta.type}/>
        <meta property='og:site_name' content={config.siteName}/>
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
