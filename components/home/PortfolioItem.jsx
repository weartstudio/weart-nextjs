import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import Image from 'next/image'

function PortfolioItem({data}) {
	return (
		<Col>
			<Card className='project small'>
				<Card.Body>
					<Image className='img-fluid mb-3 border-bottom border-2 border-dark' alt='' src={data?.featuredImage.node.sourceUrl} width={485} height={275} />
					<Card.Title>{data?.title}</Card.Title>
					<Row>
						<Col>
							<Badge bg='light'>Tech stack</Badge>
							<p className='mt-1'>{data?.portfolio.portfoliotechstack}</p>
						</Col>
						<Col className='text-end' xs='auto'>
							<Badge bg='light'>Címke</Badge>
							<p className='mt-1'>{data?.portfolio.portfoliotag}</p>
						</Col>
					</Row>
					<Card.Link href={data?.url}>Bővebben</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default PortfolioItem