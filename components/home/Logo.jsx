/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { home } from '../../helpers/texts-hu'

function Logo() {

	return (
		<div className='bg-dark border-top border-bottom py-4'>
			<Container>
				<Row lg='auto' md='4' sm='3' xs='2' className='justify-content-lg-between justify-content-center py-2 g-4 text-center'>
					{home.logos.map((img,i) => <div className='logo' key={i}><img className='img-fluid' src={img} alt="" /></div>)}
				</Row>
			</Container>
		</div>
	)
}

export default Logo