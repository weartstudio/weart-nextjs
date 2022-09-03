import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

function Hero() {
	return (
		<div className='bg-dark text-white py-5'>
			<Container>
				<Row className="justify-content-center text-center">
					<Col lg={8}>
						<h1 className='text-white'>
							<span className='text-white d-block h4'>Helló</span>
							<span className='text-primary me-2'>Balázs</span>
							vagyok, az internetre fejlesztek
						</h1>
						<p className='lead col-10 mx-auto'>Több mint 6 éves tapasztalattal rendelkező programozó vagyok, front-end fejlesztési specializációval. Jelenleg az <a href="https://opten.hu">Optennél</a> dolgozom.</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero