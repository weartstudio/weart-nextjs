import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioItem from '../../components/PortfolioItem'
import { ApolloClient,InMemoryCache } from '@apollo/client'
import { portfolioPageQuery } from '../../helpers/queries'

function portfolio({data}) {

	return (
		<>
			<div className="bg-dark py-5 text-white">
				<Container>
					<Row className='justify-content-center text-center'>
						<Col lg="8" md="10">
							<h1 className="display-5" dangerouslySetInnerHTML={{__html: data?.page.title}}></h1>
							<div dangerouslySetInnerHTML={{__html: data?.page.content}}></div>
						</Col>
					</Row>
				</Container>
				<Container className='mt-5'>
					<Row className='g-5' xs={1} lg={2}>
						{data?.projects.nodes.map((item,i)=>{
							return <PortfolioItem key={i} data={item} extraclass="dark" />
						})}
					</Row>
				</Container>
			</div>
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