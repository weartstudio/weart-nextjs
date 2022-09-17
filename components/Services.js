import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import PageTitle from './../components/PageTitle'

function Services() {
	return (
		<Container className='py-5'>
			<PageTitle>Miben tudok segíteni?</PageTitle>
			<Row>
				<Col>
					<Card className='shadow'>
						<Card.Body>
							JavaScript & React
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className='shadow'>
						<Card.Body>
							WordPress
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className='shadow'>
						<Card.Body>
							Design to Code
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Services