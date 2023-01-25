import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
	return (
		<Container id='about' className='py-lg-8 py-5'>
					<Row>
						<Col lg={4} sm={12}>
							<h2 className='text-uppercase display-4 lh-1'>Egyed Balázs</h2>
						</Col>
						<Col>

							{/* description */}
							<Row xs={1} md={2}>
								<Col>
									<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view</p>
								</Col>
								<Col>
									<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards.</p>
								</Col>
							</Row>

							{/* counter */}
							<div className="py-3 border-bottom border-primary">
								<Row xs={1} md={3}>
									<Col>
										<p className="fs-1 m-0">8+</p>
										<p>év tapasztalat</p>
									</Col>
									<Col>
										<p className="fs-1 m-0">50+</p>
										<p>sikeres projekt</p>
									</Col>
									<Col>
										<p className="fs-1 m-0">20+</p>
										<p>elégedett ügyfél</p>
									</Col>
								</Row>
							</div>

							{/* logos */}
							<p className='small text-muted text-center mt-5'>Akikkek már együtt dolgoztam.</p>

						</Col>
					</Row>
		</Container>
	)
}

export default About