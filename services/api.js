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
