import Head from 'next/head';
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { useRouter } from 'next/router'
import config from '../../lib/config';

const twitterHandle = '@' + config.social.twitter.split('/').pop();
const defaultOgImage = `${config.siteUrl}/profile.jpeg`;

const Layout = ({ children, pageMeta }) => {

  const router = useRouter();

  const meta = {
    title: config.siteName,
    description: config.siteDescription,
    image: defaultOgImage,
    type: 'website',
    ...pageMeta,
  };

  const canonicalUrl = `${config.siteUrl}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href='/favicon.ico' />

        {/* Open Graph */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={config.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        {meta.type === 'article' && meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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
