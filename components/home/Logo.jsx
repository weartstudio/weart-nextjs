/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Logo() {

	const logos = [
    '/img/home/vscode.svg',
    '/img/home/figma.svg',
    '/img/home/js.svg',
    '/img/home/react.png',
    '/img/home/nextjs.svg',
    '/img/home/wordpress.svg',
    '/img/home/git.svg',
  ];

	return (
		<div className='border-top border-bottom py-4 bg-dark'>
			<Container>
				<Row lg='auto' md='4' sm='3' xs='2' className='justify-content-lg-between justify-content-center py-2 g-4 text-center'>
					{logos.map((img,i) => <div className='logo' key={i}><img className='img-fluid' src={img} alt="" /></div>)}
				</Row>
			</Container>
		</div>
	)
}

export default Logo