import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function about() {
	return (
		<>
			<div className="bg-dark py-5 text-white text-center">
				<Container>
					<Row className='justify-content-center'>
						<Col lg="8" md="10">
							<h1 className="display-5">
								About <span className="colored">me</span>
							</h1>
							<p>Over the years, I've partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row className='justify-content-center my-5'>
					<Col lg={8} sm={12}>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad, odit cupiditate doloremque labore debitis cum saepe molestias beatae, veritatis mollitia eius fuga a odio quo nihil obcaecati ipsa ipsum?</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad, odit cupiditate doloremque labore debitis cum saepe molestias beatae, veritatis mollitia eius fuga a odio quo nihil obcaecati ipsa ipsum?</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad, odit cupiditate doloremque labore debitis cum saepe molestias beatae, veritatis mollitia eius fuga a odio quo nihil obcaecati ipsa ipsum?</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad, odit cupiditate doloremque labore debitis cum saepe molestias beatae, veritatis mollitia eius fuga a odio quo nihil obcaecati ipsa ipsum?</p>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default about