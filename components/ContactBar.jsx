import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ContactBar() {
	return (
		<div className="bg-dark">
			<Container className='text-center text-white py-5 py-lg-8'>
				<Row className='justify-content-center'>
					<Col lg={8} >
						<h3 className="display-4">Van egy projekt ötleted? <span className='colored'>Dolgozzunk együtt</span> rajta!</h3>
						<p className='text-muted my-4'>{`I'm David Louis— a designer who works with startups looking to push creative boundaries`}</p>
						<Button variant='colored' href='/contact'>Beszélgessünk</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactBar