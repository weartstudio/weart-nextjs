import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioItem from '../components/home/PortfolioItem'

function portfolio() {

	const pid = {
		title: 'Szuri-káta',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero dignissimos aliquid dolorem.',
		tech: 'WordPress, ACF, Timber, UIkit',
		tag: 'Állatorvosi rendelő',
		img: '/img/projects/szurikata.jpeg',
		url: '#'
	}

	return (
		<>
		<div className="bg-dark py-5 text-white text-center">
			<Container>
				<Row className='justify-content-center'>
					<Col lg="8" md="10">
						<h1 className="display-5">
							Selected <span className="colored">Porjects</span>
						</h1>
						<p>Over the years, I've partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.</p>
					</Col>
				</Row>
			</Container>
		</div>
				<Container className='my-5'>
					<Row className='g-5' xs={1} lg={2}>
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
						<PortfolioItem data={pid} />
					</Row>
				</Container>
		</>
	)
}

export default portfolio