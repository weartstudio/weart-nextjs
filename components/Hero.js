import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'next/image'

function Hero({ data }) {
	return (
		<div id="hero" className='py-5 d-flex align-items-center'>
			<Container>
				<Row className='align-items-center'>
					<Col lg={7}>
						<h1>{data.text.title}</h1>
						<h2 className="h2">FrontEnd fejlesztő 8+ év tapasztalattal</h2>
						<p className='lead'>{data.text.lead}</p>
					</Col>
					<Col>
						<div className="d-block">
							<Image className="rounded-circle" width={460} height={460} layout="responsive" src={data.image.sourceUrl} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero