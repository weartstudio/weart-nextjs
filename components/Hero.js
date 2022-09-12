import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'next/image'

function Hero({ data }) {
	return (
		<div id="hero" className='bg-dark text-white py-5 d-flex align-items-center'>
			<Container>
				<Row>
					<Col lg={6}>
						<h1 className='text-white'>{data.homeTitle}</h1>
						<p className='lead'>{data.homeLead}</p>
					</Col>
					<Col>
						<div className="img-right">
							<Image layout='fill' src={`https://weart.hu/wp-content/uploads/2021/01/rotate.jpg`} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero