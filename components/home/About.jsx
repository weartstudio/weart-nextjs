import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { home } from '../../helpers/texts-hu'
import Image from 'next/image'
import Link from 'next/link'

function About({data}) {
	return (
		<Container id='about' className='py-lg-8 py-5'>
					<Row className='g-5'>

						<Col lg={3} sm={12}>
							<h2 className='h1 fw-bold'>{ data.homeabouttitle }</h2>
						</Col>

						<Col lg={6}>
							<div dangerouslySetInnerHTML={{__html: data.homeaboutcontent}}></div>

							<div className="pt-4 mt-4 border-top border-2 border-primary">
								<Row xs={1} md={3}>
									{ home.about.numbers.map((item,i)=>(
										<Col key={i}>
											<p className="fs-4 m-0">{ item.num }</p>
											<p className='small'>{ item.title }</p>
										</Col>
									)) }
								</Row>
							</div>

						</Col>

						<Col lg={3} className="text-end">
							<Image src="/img/avatar.jpeg" className='img-fluid' width={400} height={400} alt="Me" />
							<div className="text-end mt-4">
								<Link href="/about" className='text-primary fw-bold text-decoration-none'>{ home.about.more } <i className='fas fa-arrow-right'></i></Link>
							</div>
						</Col>
					</Row>


		</Container>
	)
}

export default About