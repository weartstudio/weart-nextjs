import * as React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import '../styles/main.scss';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}