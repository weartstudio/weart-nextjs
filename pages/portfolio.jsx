import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioItem from '../components/home/PortfolioItem'
import { ApolloClient,InMemoryCache } from '@apollo/client'
import { portfolioPageQuery } from '../helpers/queries'
import Footer from '../components/Footer'

function portfolio({data}) {

	const pid = {
		title: 'Szuri-káta',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero dignissimos aliquid dolorem.',
		tech: 'WordPress, ACF, Timber, UIkit',
		tag: 'Állatorvosi rendelő',
		img: '/img/projects/szurikata.jpeg',
		url: '#'
	}

	return (
		<>
		<div className="bg-dark py-5 text-white text-center">
			<Container>
				<Row className='justify-content-center'>
					<Col lg="8" md="10">
						<h1 className="display-5" dangerouslySetInnerHTML={{__html: data?.page.title}}></h1>
						<div dangerouslySetInnerHTML={{__html: data?.page.content}}></div>
					</Col>
				</Row>
			</Container>
		</div>
				<Container className='my-5 my-lg-8'>
					<Row className='g-5' xs={1} lg={2}>
						{data?.projects.nodes.map((item,i)=>{
							return <PortfolioItem key={i} data={item} />
						})}
					</Row>
				</Container>
		</>
	)
}

export default portfolio

export async function getStaticProps(){

  const client = new ApolloClient({
    uri: process.env.WP,
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: portfolioPageQuery
  })

  return {
    props: {
      data: data
    }
  }
}