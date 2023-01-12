import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import Image from 'next/image'

function PortfolioItem({data}) {
	return (
		<Col>
			<Card className='project small'>
				<Card.Body>
					<Image className='img-fluid mb-3' alt='' src={data.img} width={485} height={275} />
					<Card.Title>{data.title}</Card.Title>
					<Row>
						<Col>
							<Badge bg='light'>Tech stack</Badge>
							<p className='mt-1'>{data.tech}</p>
						</Col>
						<Col className='text-end' xs='auto'>
							<Badge bg='light'>Címke</Badge>
							<p className='mt-1'>{data.tag}</p>
						</Col>
					</Row>
					<Card.Link href={data.url}>Bővebben</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default PortfolioItem