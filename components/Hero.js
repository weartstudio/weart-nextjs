import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'

function Hero({ data }) {
	return (
		<div id="hero" className='text-center text-md-start'>
			<Container className="p-0">
				<Row>
					<Col lg={6} className="py-5 text px-4">
						<h1 className='title'>Sikeres Front-end Fejlesztő</h1>
						<p className='lead'>Helló, Egyed Balázs vagyok egy szabadúszó front-end fejlesztő több mint 8 éves tapasztalattal. Weboldalaimat főleg React, és MVC alapú WordPress megoldásokkal készítem el.</p>
						<Row className='justify-content-center justify-content-md-start'>
							<Col xs="auto"><Button href="/portfolio">Portfolió</Button></Col>
							<Col xs="auto"><Button href="/about" className='btn-link'>Rólam</Button></Col>
						</Row>
					</Col>
					<Col>
						<div className="hero-img">
							<img src="/about.jpeg" alt="Egyed Balázs" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero