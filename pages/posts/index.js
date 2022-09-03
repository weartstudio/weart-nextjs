import Head from 'next/head'
import { getPosts } from '../../services/api';
import ArticleItem from '../../components/ArticleItem';
import PageTitle from '../../components/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';

function Posts({ posts }) {
	return (
		<>
			<Head>
				<title>Weart.hu</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className='my-5'>
				<PageTitle title="Blog" />
				<Row className='g-4'>
					{posts?.map(post => {
						return (
							<Col lg={4}>
								<ArticleItem post={post} key={post.id} />
							</Col>
						)
					})}
				</Row>
			</Container>
		</>
	)
}

export default Posts

export async function getStaticProps() {
	const posts = await getPosts();
	return { props: { posts } }
}