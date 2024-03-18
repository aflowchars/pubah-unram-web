import { PUBLIC_STRAPI_API, PUBLIC_STRAPI_BASE } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(
		`${PUBLIC_STRAPI_API}/program-bipa?populate[0]=hero&populate[1]=hero.thumbnail&populate[2]=nav_page&populate[3]=nav_page.prev&populate[4]=nav_page.next`
	);
	const data = await response.json();

	const datas = data.data.attributes;

	const programs = {
		hero: {
			id: datas?.hero?.id,
			src: `${PUBLIC_STRAPI_BASE}${datas?.hero?.thumbnail?.data?.attributes?.url}`,
			alt: datas?.hero?.thumbnail?.data?.attributes?.alternativeText,
			title: datas?.hero?.title,
			description: datas?.hero?.description
		},
		content: datas?.content,
		nav_page: datas?.nav_page
	};

	return {
		programs
	};
}
