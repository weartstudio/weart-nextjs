import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PortfolioItem from '../PortfolioItem'
import {home} from '../../helpers/texts-hu'

function Portfolio({data}) {

	return (
		<Container className='py-lg-8 py-5'>
			<Row lg={2} xs={1} className='g-5'>
				<Col>
					<Row xs={1} className='g-5'>
						<Col>
							<h2 className="display-5 mt-0">{ home.portfolio.title }</h2>
							<p className='text-meta'>{ home.portfolio.desc }</p>
						</Col>
						{data?.homeportfoliofeatured.map((item, i)=>{
							if(i<=1) return <PortfolioItem key={i} data={item} />
						})}
					</Row>
				</Col>
				<Col>
					<Row className='mt-5 g-5' xs={1}>
						{data?.homeportfoliofeatured.map((item, i)=>{
							if(i>=2 && i<=3) return <PortfolioItem key={i} data={item} />
						})}
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