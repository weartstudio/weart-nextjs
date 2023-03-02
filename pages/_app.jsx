import * as React from 'react';
import Head from 'next/head';
import '../styles/main.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ContactBar from '../components/ContactBar';

export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weart.hu - Egyed Balázs, JS, React és WordPress fejlesztő</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <ContactBar />
      <Footer />
    </>
  );
}