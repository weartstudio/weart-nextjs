import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { posts } from '../../helpers/queries';
import { Container, Row,Col } from 'react-bootstrap';
import Link from 'next/link';

const dateDisplay = (datum) => {
	var d = new Date(datum);
	return d.toLocaleDateString('hu-hu');
}

export default function index({posts}) {
	return (
		<Container className='my-5'>
			<Row className='g-4' lg={3} md={2} xs={1}>
				{posts.map((post,i)=>(
					<Col key={post.id}>
						<span className="small text-muted">{dateDisplay(post.date)}</span>
						<h1 className='h4 my-3'>
							<Link href={'posts/' + post.slug} className='text-decoration-none'>
								{post.title}
							</Link>
						</h1>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: process.env.WP,
		cache: new InMemoryCache()
	});

	const { data } = await client.query({
		query: posts
	});

	return {
		props: {
			posts: data.posts.edges.map(p => p.node)
		}
	}
}