import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import Hero from '../components/Hero';
import { getPosts } from '../services/api';

export default function Home({ posts }) {
  return (
    <div className='wrapper'>
      <Head>
        <title>Weart.hu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ArticleList posts={ posts } />
    </div>
  )
}

export async function getStaticProps(){
  const posts = await getPosts();
  return { props: { posts } }
}