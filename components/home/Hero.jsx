import Image from 'next/image'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Hero({data}) {
	console.log(data)
	return (
		<div className="py-6 bg-dark overflow-hidden">
			<Container className='text-center'>
				<Row lg='2' xs='1' className='g-5 align-items-center'>
					<Col className='text-lg-start'>
						<h1 className='display-4 text-white' dangerouslySetInnerHTML={{__html:data?.herotitle}}></h1>
						<div className="my-4 text-muted">
							<p>{data?.herotext}</p>
						</div>
						<Button href='/contact' variant="colored">Beszélgessünk</Button>
					</Col>
					<Col className='text-lg-end'>
						<div className="hero-img">
							<Image className='img-bg' alt='' fill src={data?.heroimg.sourceUrl} />
							<Image className='img-fluid' alt='' width={460} height={460} src={data?.heroimg.sourceUrl} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Hero