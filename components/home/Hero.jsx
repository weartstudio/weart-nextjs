import Image from 'next/image'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { home } from '../../helpers/texts-hu'

function Hero({data}) {
	return (
		<div className="py-6 bg-dark overflow-hidden">
			<Container className='text-center'>
				<Row lg='2' xs='1' className='g-5 align-items-center'>
					<Col className='text-lg-start'>
						<h1 className='display-4 text-white'>{ data?.homeherotitle }</h1>
						<div className="my-4 text-muted">
							<p>{ data?.herocontent }</p>
						</div>
						<Button href='/contact' variant="colored">{ home.hero.btn }</Button>
					</Col>
					<Col className='text-lg-end'>
						<div className="hero-img">
							<Image className='img-bg' alt='' fill src="/img/avatar.jpeg" />
							<Image className='img-fluid' alt='' width={460} height={460} src="/img/avatar.jpeg" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero