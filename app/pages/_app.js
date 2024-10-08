import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My E-commerce Store</title>
        <meta name="description" content="Welcome to my e-commerce store!" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;