<script>
	import { SeoHead } from '$lib/components/base';

	import HeroPrograms from '../hero-programs.svelte';
	import NavigationPages from '../navigation-pages.svelte';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';

	export let data;
</script>

<SeoHead title="Tes Kemampuan Bahasa Asing" />

<HeroPrograms data={data.programs.hero} />

<div class="container mx-auto mt-8 max-w-screen-lg px-5 md:mt-10 md:px-10">
	<article class="content_wrap [&>h4]:!mt-4">
		{@html data.programs.content}
	</article>
</div>

<NavigationPages datas={data.programs.nav_page} />
