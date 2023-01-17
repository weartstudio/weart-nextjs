import React, { useState } from 'react'
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap'
import TestimonialItem from './TestimonialItem'
import { testimonialQuery } from '../../helpers/queries'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

function Testimonials({data}) {

	return (
		<div className='py-lg-8 py-5  bg-dark text-white'>
			<Container style={{minHeight: 250}}>
				<Row className='justify-content-center'>
					<Col lg='9'>
						<Carousel slide={true} controls={false} indicators={false}>
							{data.testimonialblockcontent.map((item,i)=>(
								<Carousel.Item key={i}>
									<TestimonialItem data={item} />
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Testimonials