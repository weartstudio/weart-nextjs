import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'next/image'

function Hero() {
	return (
		<div id="hero" className='bg-dark text-white py-5 d-flex align-items-center'>
			<Container>
				<Row>
					<Col lg={6}>
						<h1 className='text-white'>Helló Egyed Balázs vagyok.</h1>
						<p className='lead'>Több mint 6 éves tapasztalattal rendelkező programozó, front-end fejlesztési specializációval. Jelenleg az <a href="https://opten.hu">Optennél</a> dolgozom.</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero