// import { PUBLIC_WP_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import { PUBLIC_STRAPI_API } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	try {
		const response = await fetch(
			`${PUBLIC_STRAPI_API}/blogs/${params.slug}?populate[0]=hero&populate[1]=hero.thumbnail&populate[2]=hero.author&populate[3]=hero.author.avatar&populate[4]=blogs&populate[5]=blogs.hero&populate[6]=blogs.hero.thumbnail&populate[7]=blogs.hero.author&populate[8]=blogs.hero.author.avatar`
		);

		const data = await response.json();

		const blog = data.data.attributes;

		// console.log(blog);

		return { blog };
	} catch (err) {
		if (err) {
			error(500);
		}
	}
}
