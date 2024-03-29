import { homePageQuery } from '../helpers/queries'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Logo from '../components/home/Logo'
import Portfolio from '../components/home/Portfolio'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import About from '../components/home/About'

export default function Home({data}) {
  return (
    <>
      <Hero data={data?.page.homeHero} />
      <Logo />
      <Services  data={data?.page.homeServices} />
      <Portfolio data={data?.page.homePortfolio} />
      <Testimonials data={data?.acfOptionsGlobalOptions.testimonial} />
      <About data={data?.page.homeAbout} />
    </>
  )
}

export async function getStaticProps(){

  const client = new ApolloClient({
    uri: process.env.WP,
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: homePageQuery
  })

  return {
    props: {
      data: data
    }
  }
}