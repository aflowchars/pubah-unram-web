<script>
	import { SeoHead } from '$lib/components/base';
	import HeroPrograms from '../hero-programs.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import NavigationPages from '../navigation-pages.svelte';

	export let data;

	console.log(data.programs);
</script>

<SeoHead title="Program Kursus" />

<HeroPrograms data={data.programs.hero} />

<div class="container mx-auto mt-8 max-w-screen-lg px-5 md:mt-10 md:px-10">
	<article class="content_wrap">
		<section>
			{@html data.programs.content}
		</section>

		<Accordion.Root class="mt-5 w-full">
			{#each data.programs.accordions as accordion}
				<Accordion.Item value="item-{accordion?.id}">
					<Accordion.Trigger
						class="text-left text-xl font-semibold text-blue-900"
					>
						{accordion?.title}
					</Accordion.Trigger>

					<Accordion.Content>
						{@html accordion?.content}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</article>
</div>

<NavigationPages datas={data.programs.nav_page} />
