async function get(api){
	const apiUrl = process.env.WORDPRESS_API_URL;

	let response = await fetch(apiUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'	},
		body: JSON.stringify({
			query: api
		}),
	});

	let data = await response.json();

	return data;
}

async function getPosts(){

	const query = `query {
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
  }`;

	const response = await get(query);
	const data = response.data.posts.edges.map(item => item.node);
	return data;
}

async function getPostBySlug(slug){

	const query = `{
    postBy(slug: "${slug}") {
      id
      title
      content
    }
  }`;

	const response = await get(query);
  const data = response.data.postBy;
	return data;
}

export { getPosts, getPostBySlug };