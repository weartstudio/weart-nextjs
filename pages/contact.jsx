import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Testimonials from '../components/home/Testimonials'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { testimonialQuery } from '../helpers/queries'
import { footer } from '../helpers/texts-hu'

function contact({data}) {
	return (
		<div className='bg-dark text-white'>
			<Container>
				<Row lg={2} xs={1} className="py-5 pt-lg-7 pb-5 g-5">
					<Col>
						<h1 class="display-5">{footer.contact.title}</h1>
						<p className='h3 mt-5'><i className="fa-solid fa-envelope text-primary me-3"></i>balazs@weart.hu</p>
					</Col>
					<Col>
						<Card class='bg-dark-alt'>
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
										<Form.Control as="textarea" rows={4} />
									</Form.Group>
									<div className="mt-5">
										<Button variant='primary'>Küldés</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			<Testimonials data={data?.acfOptionsGlobalOptions.testimonial} />


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