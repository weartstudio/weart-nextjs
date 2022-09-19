import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import PageTitle from './../components/PageTitle'

function Services() {
	return (
		<div className="bg-light">
			<Container className='py-5'>
				<Row className='g-5'>
					<Col lg="4">
						<Card className='shadow'>
							<Card.Body>
								JavaScript & React
							</Card.Body>
						</Card>
					</Col>
					<Col lg="4">
						<Card className='shadow'>
							<Card.Body>
								WordPress
							</Card.Body>
						</Card>
					</Col>
					<Col lg="4">
						<Card className='shadow'>
							<Card.Body>
								Design to Code
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Services