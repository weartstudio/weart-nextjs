import Head from 'next/head'
import { get } from '../../services/api';


export default function Home({ post = null }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="post-container">
        <h1>{ post[0].title.rendered }</h1>
        <div className='post-content'  dangerouslySetInnerHTML={{ __html: post[0].content.rendered }} />
      </div>
    </>
  )
}


export async function getStaticPaths(){
  const posts = await get('posts');
  return {
    paths: posts.map( post => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}){
  const post = await get(`posts?slug=${params.url}`)
  return { props: { post } }
}

