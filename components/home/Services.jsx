import React from 'react'
import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Services({data}) {
	return (
		<div className="bg-dark text-white">
			<Container className='pt-5 pb-lg-7 pb-5'>
				<div className="text-center mb-5">
					<h2 className="display-5" dangerouslySetInnerHTML={{__html: data?.serviceTitle }}></h2>
					<div style={{maxWidth: 520}} className='text-muted mx-auto'>
						<p>{data?.serviceText}</p>
					</div>
				</div>
				<Row className='g-5' xs={1} lg={3}>
					{data?.serviceServices.map((item,i)=>(
						<Col key={i}>
							<Card className='service border-0 border-top border-primary border-3'>
								<Card.Body>
									<Image src={item.icon?.sourceUrl} width={50} height={50} alt="WordPress" />
									<h3 className='text-white my-3 h4'>{item.title}</h3>
									<p className='text-muted m-0 small'>{item.text}</p>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}

export default Services