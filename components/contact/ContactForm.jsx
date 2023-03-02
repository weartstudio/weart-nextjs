import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { Form, Button, Alert } from 'react-bootstrap';

export default function ContactForm({mail}) {
	const form = useRef(null);
	const [isSuccess, setIsSuccess] = useState(null);

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(mail.sid, mail.tid, form.current, mail.pk)
      .then((result) => {
          console.log(result.text);
					form.current.reset();
					setIsSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
  };

	return (
		<Form className='p-4' ref={form} onSubmit={sendEmail}>
			{isSuccess ? <Alert onClose={() => setIsSuccess(false)} dismissible>Az email elküldve!</Alert> : ''}
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
	)
}
