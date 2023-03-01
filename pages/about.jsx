import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { aboutPageQuery } from '../helpers/queries'
import { ApolloClient,InMemoryCache } from '@apollo/client'

function about({data}) {
	return (
		<>
			<div className="bg-dark py-5 text-white text-center">
				<Container>
					<Row className='justify-content-center'>
						<Col lg="8" md="10">
							<h1 className="display-5">{data.page.title}</h1>
							<div dangerouslySetInnerHTML={{__html: data.page.excerpt}}></div>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row className='justify-content-center my-5'>
					<Col lg={8} sm={12} dangerouslySetInnerHTML={{__html: data.page.content}}></Col>
				</Row>
			</Container>
		</>
	)
}

export default about

export async function getStaticProps(){

  const client = new ApolloClient({
    uri: process.env.WP,
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: aboutPageQuery
  })

  return {
    props: {
      data: data
    }
  }
}