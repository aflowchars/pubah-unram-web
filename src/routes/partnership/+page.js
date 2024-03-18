import { PUBLIC_STRAPI_API } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(
		`${PUBLIC_STRAPI_API}/partnership?populate[0]=hero&populate[1]=hero.link&populate[2]=hero.thumbnail&populate[3]=nav_page&populate[4]=nav_page.prev&populate[5]=nav_page.next`
	);
	const data = await response.json();
	const datas = data.data.attributes;

	return {
		partnership: datas
	};
}
