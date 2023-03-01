import React, {useRef, useState} from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Testimonials from '../components/home/Testimonials'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { testimonialQuery } from '../helpers/queries'
import { footer } from '../helpers/texts-hu'
import emailjs from '@emailjs/browser';

function contact({data, mail}) {
	const form = useRef();
	const [isSendedSuccess, setIsSendedSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(mail.sid, mail.tid, form.current, mail.pk)
      .then((result) => {
          console.log(result.text);
					form.current.reset();
					setIsSendedSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
  };

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
								<Form className='p-4' ref={form} onSubmit={sendEmail}>
									{isSendedSuccess ? <Alert onClose={() => setIsSendedSuccess(false)} dismissible>Az email elküldve!</Alert> : ''}
									<Form.Group className="mb-3">
										<Form.Control type="text" placeholder="Név" name="user_name" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="email" placeholder="Email" name="user_email" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control type="text" placeholder="Weboldal (ha van)" name="user_web" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control as="textarea" rows={4} name="message" />
									</Form.Group>
									<div className="mt-5">
										<Button variant='primary' type='submit'>Küldés</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			<Testimonials data={data?.acfOptionsGlobalOptions.testimonial} />


		</div>
	)
}

export default contact

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