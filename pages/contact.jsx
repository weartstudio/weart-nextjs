import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Testimonials from '../components/home/Testimonials'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { testimonialQuery } from '../helpers/queries'

function contact({data}) {
	return (
		<div className='bg-dark text-white'>
			<Container>

				<Row lg={2} xs={1} className="py-5 py-lg-8 g-5">
					<Col>
						<h1 class="display-5">Van egy projekt ötleted? <span class="colored">Dolgozzunk együtt</span> rajta!</h1>
					</Col>
					<Col>
						<Card class='border-0 border-top border-primary border-3'>
							<Card.Body>
								<Form className='p-4'>
									<Form.Group className="mb-3">
										<Form.Control type="text" placeholder="Név" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="email" placeholder="Email" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="text" placeholder="Weboldal (ha van)" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="text" placeholder="Büzsé" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control as="textarea" rows={4} />
									</Form.Group>
									<Button variant='primary'>Küldés</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<hr />
				<div className="py-5">
					<Testimonials data={data?.acfOptionsGlobalOptions.testimonial} />
				</div>

			</Container>
		</div>
	)
}

export default contact

contact.getLayout = function PageLayout(page){
	return (
		<>
			<Menu />
			{page}
			<Footer />
		</>
	)
}

export async function getStaticProps(){

  const client = new ApolloClient({
    uri: process.env.WP,
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: testimonialQuery
  })

  return {
    props: {
      data: data
    }
  }
}