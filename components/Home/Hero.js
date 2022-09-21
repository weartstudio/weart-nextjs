import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'

function Hero({ data }) {
	return (
		<Row id="hero" className='align-items-center text-center text-lg-start pt-4'>
			<Col lg={6} className="py-5 text-white">
				<h1 className='h2'>Helló, egy Front-end fejlesztő vagyok</h1>
				<p className='lead'>Egyed Balázs vagyok egy szabadúszó front-end fejlesztő több mint 8 éves tapasztalattal. Weboldalaimat főleg React, és MVC alapú WordPress megoldásokkal készítem el, de sok egyéb technológiát is ismerek.</p>
				<Button size="lg" href="https://myfolio-portfolio-webflow-template.webflow.io/">Portfolió</Button>
			</Col>
			<Col className='text-end'>
				<div className="hero-img">
					<img className='img-fluid' src="/image/about.jpeg" alt="Egyed Balázs" />
				</div>
			</Col>
		</Row>
	)
}

export default Hero