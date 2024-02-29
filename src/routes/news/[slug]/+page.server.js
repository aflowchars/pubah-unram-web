import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const postResponse = await fetch(
		`http://pubah-wp.test/wp-json/wp/v2/posts?slug=${params.slug}`
	);

	const post = await postResponse.json();

	const featuredMediaResponse = await fetch(
		`http://pubah-wp.test/wp-json/wp/v2/media/${post[0]?.featured_media}`
	);

	const featuredMedia = await featuredMediaResponse.json();

	const fomatterDateID = new Intl.DateTimeFormat('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const categoryResponse = await fetch(
		`http://pubah-wp.test/wp-json/wp/v2/categories/${post[0]?.categories}`
	);

	const category = await categoryResponse.json();

	console.log(category);

	return {
		post,
		featuredMedia: featuredMedia.source_url,
		createdAt: fomatterDateID.format(post?.modified_gmt),
		category: {
			link: category?.link,
			name: category?.name
		}
	};
}
