import { gql } from "@apollo/client";

const GET_POSTS = gql`
query {
	posts(where: {status: PUBLISH}) {
		edges {
			node {
				excerpt
				slug
				title
				date
				id
			}
		}
	}
}
`;

const GET_POSTS_SLUG = gql`
query {
	posts(where: {status: PUBLISH}) {
		edges {
			node {
				slug
				id
			}
		}
	}
}
`;

const GET_POSTBY_SLUG = gql`
query ($slugUrl: String!) {
	postBy(slug: $slugUrl) {
		id
		title
		content
	}
}
`;

export {
	GET_POSTS,
	GET_POSTS_SLUG,
	GET_POSTBY_SLUG
}