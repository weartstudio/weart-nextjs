import React, { useState } from 'react'
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap'
import TestimonialItem from './TestimonialItem'
import { testimonialQuery } from '../../helpers/queries'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

function Testimonials({data}) {
	console.log(data)
	const [index,setIndex] = useState(0);
	return (
		<div className='py-7 bg-dark text-white'>
			<Container>
				<Row>
					<Col>
						<h3 className='display-5'>{data.testimonialblocktitle}</h3>
						<p className='text-muted'>{data.testimonialblocktext}</p>
					</Col>
					<Col>
						{	index	>	0 &&
							<Button onClick={()=>setIndex(p => (p-1) )}><i className='fas fa-arrow-left'></i></Button>
						}
						{	index	<	1 &&
							<Button onClick={()=>setIndex(p => (p+1) )}><i className='fas fa-arrow-right'></i></Button>
						}
					</Col>
				</Row>
			</Container>
			<Container fluid='xl'>
				<Carousel activeIndex={index} onSelect={(selectedIndex, e)=>{setIndex(selectedIndex)}} slide={true} controls={false} indicators={false}>
					<Carousel.Item>
						<Row className='g-5'>
							{data.testimonialblockcontent.map((item,i)=>{
								if(i<3){
									return <TestimonialItem key={i} data={item} />;
								}
							})}
						</Row>
					</Carousel.Item>
					<Carousel.Item>
						<Row className='g-5'>
							<TestimonialItem />
							<TestimonialItem />
							<TestimonialItem />
						</Row>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	)
}

export default Testimonials