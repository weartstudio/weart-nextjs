import React from 'react'
import { Col, Card } from 'react-bootstrap'

function TestimonialItem({data}) {
	function stars(){
		let arr = [];
		for (let i = 0; i < 5; i++) {
			arr[i] = <i key={i} className="fa-solid fa-star text-warning me-2"></i>;
		}
		return <p>{arr}</p>;
	}

	return (
		<Col className='pt-4'>
			<Card className='service border-0 border-top border-primary border-3 card'>
				<Card.Body>
					{ stars() }
					<p className='text-muted'>{data?.text}</p>
					<p>{data?.name} <br /> {data?.tag}</p>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default TestimonialItem


