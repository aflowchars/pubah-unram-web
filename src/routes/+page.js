import { PUBLIC_STRAPI_API } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(
		`${PUBLIC_STRAPI_API}/home?populate[0]=hero&populate[1]=hero.thumbnail&populate[2]=partner&populate[3]=partner.image&populate[4]=call_to_action&populate[5]=call_to_action.link&populate[6]=blogs&populate[7]=blogs.hero.thumbnail&populate[8]=blogs.hero.author&populate[9]=blogs.hero.author.avatar`
	);
	const data = await response?.json();

	const { hero, partner, call_to_action, blogs } = data.data.attributes;

	return { hero, partner, call_to_action, blogs };
}
