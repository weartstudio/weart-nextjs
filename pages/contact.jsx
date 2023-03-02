import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Testimonials from '../components/home/Testimonials'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { testimonialQuery } from '../helpers/queries'
import { footer } from '../helpers/texts-hu'
import ContactForm from '../components/contact/ContactForm'

export default function contact({data, mail}) {

	return (
		<div className='bg-dark text-white'>
			<Container>
				<Row lg={2} xs={1} className="py-5 pt-lg-7 pb-5 g-5">
					<Col>
						<h1 className="display-5">{footer.contact.title}</h1>
						<p className='h3 mt-5'><i className="fa-solid fa-envelope text-primary me-3"></i>balazs@weart.hu</p>
					</Col>
					<Col>
						<Card className='bg-dark-alt'>
							<Card.Body>
								<ContactForm mail={mail} />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			<Testimonials data={data?.acfOptionsGlobalOptions.testimonial} />


		</div>
	)
}

contact.getLayout = function PageLayout(page){
	return (
		<>
			<Menu />
			{page}
			<Footer />
		</>
	)
}

export async function getStaticProps(){

  const client = new ApolloClient({
    uri: process.env.WP,
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: testimonialQuery
  })

	const mail = {
		sid: process.env.MAILSID,
		tid: process.env.MAILTID,
		pk: process.env.MAILPK,
	}

  return {
    props: {
      data: data,
			mail: mail
    }
  }
}