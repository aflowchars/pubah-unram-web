import { PUBLIC_STRAPI_API, PUBLIC_STRAPI_BASE } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const request = await fetch(
		`${PUBLIC_STRAPI_API}/profile?populate[0]=hero&populate[1]=hero.thumbnail&locale=id&populate[2]=details`
	);

	const data = await request.json();

	const { hero, content, details } = data.data.attributes;

	const profile = {
		hero: {
			title: hero?.title,
			description: hero?.description,
			image: {
				src: `${PUBLIC_STRAPI_BASE}${hero?.thumbnail?.data?.attributes?.url}`,
				alt: hero?.thumbnail?.data?.attributes?.alternativeText
			}
		},
		content: content,
		details: details,
		nav_page: {
			prev: {
				link: '/gallery',
				label: 'Galeri'
			},
			next: {
				link: '/programs',
				label: 'Programs'
			}
		}
	};

	return {
		profile
	};
}
