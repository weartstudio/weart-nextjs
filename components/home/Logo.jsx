/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Logo({data}) {

	return (
		<div className='border-top border-bottom py-5 bg-dark'>
			<Container>
				<Row lg='auto' md='4' sm='3' xs='2' className='justify-content-lg-between justify-content-center py-2 g-4 text-center'>
					{data.map((img,i) => <div className='logo' key={i}><img className='img-fluid' src={img.img.sourceUrl} alt="" /></div>)}
				</Row>
			</Container>
		</div>
	)
}

export default Logo