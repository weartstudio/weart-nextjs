import React from 'react'
import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Services() {
	return (
		<div className="bg-dark text-white">
			<Container className='py-6'>
				<div className="text-center mb-5">
					<h2 className="display-5">Miben tudok <span className="colored">segíteni?</span></h2>
					<div style={{maxWidth: 520}} className='text-muted mx-auto'>
						<p>If you are looking for someone who will help you to build your digital web presence than congratulations!</p>
					</div>
				</div>
				<Row className='g-5' xs={1} lg={3}>
					<Col>
						<Card className='service border-0 border-top border-primary border-3'>
							<Card.Body>
								<Image src='/img/home/code-icon.svg' width={50} height={50} alt="WordPress" />
								<h3 className='text-white my-3 h4'>Design to Code</h3>
								<p className='text-muted m-0 small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis</p>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className='service border-0 border-top border-primary border-3'>
							<Card.Body>
								<Image src='/img/home/react-icon.png' width={50} height={50} alt="WordPress" />
								<h3 className='text-white my-3 h4'>JS & React</h3>
								<p className='text-muted m-0 small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis</p>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className='service border-0 border-top border-primary border-3'>
							<Card.Body>
								<Image src='/img/home/wordpress-icon.png' width={50} height={50} alt="WordPress" />
								<h3 className='text-white my-3 h4'>WordPress</h3>
								<p className='text-muted m-0 small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Services