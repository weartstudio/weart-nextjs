import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

function Hero() {
	return (
		<div className='bg-dark text-light py-5'>
			<Container>
				<Row>
					<Col lg={6}>
						<h1 className='text-white small'>
							Szia, az én nevem
							<span className='text-primary h1 d-block'>Egyed Balázs</span></h1>
						<h2 className='text-white h1'>Az internetre fejlesztek.</h2>
						<p>Több mint 8 éves tapasztalattal rendelkező programozó vagyok, front-end fejlesztési specializációval. Imádok emberközpontú, gyors, különleges webes megoldásokat építeni. Jelenleg az <a href="https://opten.hu">Opten</a>nél dolgozom Front-End fejlesztőként.</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero