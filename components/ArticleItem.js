import React from 'react'
import Link from 'next/link'
import { Card } from 'react-bootstrap';

function ArticleItem({ post }) {

	const dateDisplay = (datum) => {
		var d = new Date(datum);
		return d.toLocaleDateString('hu-hu');
	}

	return (
		<Card className="h-100 shadow">
			<Card.Body>
				<span className="small text-muted">{dateDisplay(post.date)}</span>
				<h1 className='h4 my-3'>
					<Link href={'posts/' + post.slug}>
						<a className='stretched-link text-decoration-none'>
							{post.title}
						</a>
					</Link>
				</h1>
				<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
			</Card.Body>
		</Card>
	)
}

export default ArticleItem