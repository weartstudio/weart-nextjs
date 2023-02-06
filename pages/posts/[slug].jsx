import { ApolloClient, InMemoryCache } from '@apollo/client';
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';
import { posts_slug, posts_by_slug } from '../../helpers/queries';

export default function Post({post}) {
	return (
		<Container className='post-container my-5'>
			<Row className='justify-content-center'>
				<Col lg="8">
					<h1>{post?.title}</h1>
					<div className='post-content' dangerouslySetInnerHTML={{ __html: post?.content }} />
				</Col>
			</Row>
		</Container>
	)
}

export async function getStaticPaths() {

	const client = new ApolloClient({
		uri: process.env.WP,
		cache: new InMemoryCache()
	})

  const { data } = await client.query({
    query: posts_slug
  })

  const paths = data.posts.edges.map(post => {
    return {
      params: {
        slug: post.node.slug
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

	const client = new ApolloClient({
		uri: process.env.WP,
		cache: new InMemoryCache()
	})

  const { data } = await client.query({
    query: posts_by_slug,
    variables: { slugUrl: params.slug }
  });

  return {
    props: {
      post: data.postBy
    }
  }
}