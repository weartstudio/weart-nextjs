import Head from 'next/head'
import ArticleList from '../../components/ArticleList';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_POSTS } from '../../graphql/queries';

export default function Posts({ posts }) {
	console.log(posts)
	return (
		<>
			<Head>
				<title>Weart.hu</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ArticleList posts={posts} limit={9} />
		</>
	)
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: process.env.GQL_URL,
		cache: new InMemoryCache()
	});

	const { data } = await client.query({
		query: GET_POSTS
	});

	return {
		props: {
			posts: data.posts.edges.map(p => p.node)
		}
	}
}