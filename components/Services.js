import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import PageTitle from './../components/PageTitle'

function Services() {
	return (
		<>
			<div className="text-center text-white">
				<h2 className="h2 text-white">Look at my services</h2>
				<div className='lead mx-auto' style={{ maxWidth: 500 }}>
					<p>If you are looking for someone who will help you to build your digital web presence than congratulations!</p>
				</div>
			</div>
			<Row className='g-5 py-5'>
				<Col lg="4">
					<Card className="border-top border-primary border-3 shadow">
						<Card.Body>
							JavaScript & React
						</Card.Body>
					</Card>
				</Col>
				<Col lg="4">
					<Card className="border-top border-primary border-3 shadow">
						<Card.Body>
							WordPress
						</Card.Body>
					</Card>
				</Col>
				<Col lg="4">
					<Card className="border-top border-primary border-3 shadow">
						<Card.Body>
							Design to Code
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Services