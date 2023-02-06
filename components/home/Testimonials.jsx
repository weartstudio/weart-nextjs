import { Container, Carousel, Row, Col } from 'react-bootstrap'

function Testimonials({data}) {

	return (
		<div className='py-6 bg-dark text-white'>
			<Container style={{minHeight: 250}}>
				<Row className='justify-content-center'>
					<Col lg='9'>
						<Carousel slide={true} controls={false} indicators={false}>
							{data.testimonialblockcontent.map((item,i)=>(
								<Carousel.Item key={i}>
									<blockquote className='mb-0 d-flex flex-column'>
										<p className=''>{item?.text}</p>
										<cite className='ms-auto'><span className='text-primary'>{item?.name}<br/>{item?.tag}</span></cite>
									</blockquote>
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Testimonials