<script lang="ts">
	import { SeoHead } from '$lib/components/base';
	import NavigationPages from '../programs/navigation-pages.svelte';

	import HeroCarousel from './header.svelte';

	export let data;
</script>

<SeoHead title="Kerjasama" />

<HeroCarousel data={data?.partnership?.hero} />

<div class="container mx-auto mt-8 max-w-screen-lg px-5 md:mt-10 md:px-10">
	<article class="content_wrap [&>h3]:mt-4 first:[&>h3]:mt-0">
		{@html data?.partnership?.content}
	</article>
</div>

<NavigationPages datas={data?.partnership?.nav_page} />
