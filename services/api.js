export async function get(api) {
	const apiUrl = process.env.API;
	const url = apiUrl + api;

	try{
		let response = await fetch(url, {
			credentials: 'same-origin',
			headers: {
        'Content-Type': 'application/json',
        // 'X-WP-Nonce' : my_var.nonce
    	},
		});
		let data = await response.json();
		return data;
	}catch(e){
		throw e;
		return false;
	}
}

export async function getql(api){
	const apiUrl = process.env.WORDPRESS_API_URL;
	let response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: api,
			variables: {},
		}),
	});
	let data = await response.json();
	return data;
}