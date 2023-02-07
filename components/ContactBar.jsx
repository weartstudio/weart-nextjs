import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { footer } from '../helpers/texts-hu'

function ContactBar() {
	return (
		<div className="bg-dark">
			<Container className='text-center text-white py-5 py-lg-8'>
				<Row className='justify-content-center'>
					<Col lg={8} >
						<h3 className="display-4">{ footer.contact.title }</h3>
						<p className='text-muted my-4'>{ footer.contact.desc }</p>
						<Button variant='colored' href='/contact'>{ footer.contact.btn }</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactBar