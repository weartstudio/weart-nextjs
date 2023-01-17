import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function TestimonialItem({data}) {
	return (

				<blockquote className='mb-0 d-flex flex-column'>
					<p className=''>{data?.text}</p>
					<cite className='ms-auto'><span className='text-primary'>{data?.name}<br/>{data?.tag}</span></cite>
				</blockquote>

	)
}

export default TestimonialItem


