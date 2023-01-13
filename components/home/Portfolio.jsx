import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PortfolioItem from './PortfolioItem'


function Portfolio() {

	const pid = {
		title: 'Szuri-káta',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero dignissimos aliquid dolorem.',
		tech: 'WordPress, ACF, Timber, UIkit',
		tag: 'Állatorvosi rendelő',
		img: '/img/projects/szurikata.jpeg',
		url: '#'
	}

	return (
		<Container className='py-6'>
			<Row lg={2} xs={1} className='g-5'>
				<Col>
					<Row xs={1} className='g-5'>
						<Col>
							<h2 className="display-5 mt-0">Kiemelt <span className='colored'>referenciák</span></h2>
							<p className='text-meta'>{`Over the years, I've partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.`}</p>
						</Col>
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
					</Row>
				</Col>
				<Col>
					<Row className='mt-5 g-5' xs={1}>
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
						<Col className='d-flex justify-content-center'>
							<Button href='/portfolio' variant='colored'>Még több projekt</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Portfolio