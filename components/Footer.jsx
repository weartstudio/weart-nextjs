import React, { useState } from 'react'
import { Container, Button, Row, Col, Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

function Footer() {
	const [thisYear] = useState(new Date().getFullYear())
	return (
		<div className='bg-dark'>

			<Container className='text-center text-white py-5 py-lg-8'>
				<Row className='justify-content-center'>
					<Col lg={8} >
						<h3 className="display-4">Van egy projekt ötleted? <span className='colored'>Dolgozzunk együtt</span> rajta!</h3>
						<p className='text-muted my-4'>{`I'm David Louis— a designer who works with startups looking to push creative boundaries`}</p>
						<Button variant='colored' href='/contact'>Beszélgessünk</Button>
					</Col>
				</Row>
			</Container>

			{/* copyright bar */}
			<Container className='text-muted small py-4 border-top text-center d-flex flex-column align-items-center'>

				<Nav className='mx-auto justify-content-center mb-4'>
					<Nav.Link href="/about">Rólam</Nav.Link>
					<Nav.Link href="/portfolio">Portfolió</Nav.Link>
					<Nav.Link href="/contact">Kapcsolat</Nav.Link>
					<Nav.Link href="https://github.com/weartstudio">
						<i className="fa-brands fa-github"></i>
						<span className="ms-2">Github</span>
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/balazsegyed/">
						<i className="fa-brands fa-linkedin"></i>
						<span className="ms-2">LinkedIn</span>
					</Nav.Link>
				</Nav>

				<p className='m-0'>Minden jog fenntartva &copy; 2019 - {thisYear}</p>

				<Nav className='mx-auto justify-content-center'>
					<Nav.Link href="/about">Adatvédelem</Nav.Link>
					<Nav.Link href="/portfolio">Impresszum</Nav.Link>
				</Nav>

			</Container>
		</div>
	)
}

export default Footer