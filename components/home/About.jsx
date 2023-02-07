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
							{/* <h2 className='text-uppercase display-5 lh-1'>{ home.about.name }</h2> */}
							<h2 className='h1 fw-bold'>Rólam</h2>
						</Col>

						<Col lg={6}>
							<p className='fw-bold lead'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
							<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view</p>
							<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards.</p>

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
								<Link href="/about" className='text-primary fw-bold text-decoration-none'>Bővebben rólam <i className='fas fa-arrow-right'></i></Link>
							</div>
						</Col>
					</Row>


		</Container>
	)
}

export default About