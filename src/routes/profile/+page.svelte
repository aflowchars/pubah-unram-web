<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';

	import { HeroThumbnail, SeoHead } from '$lib/components/base';
	import NavigationPages from '../programs/navigation-pages.svelte';

	export let data;
</script>

<SeoHead title="Profile" />

<HeroThumbnail data={data?.profile?.hero} />

<div
	class="container mx-auto mb-12 mt-8 max-w-screen-lg px-5 md:mb-20 md:mt-10 md:px-10"
>
	<article class="content_wrap space-y-4">
		<section>
			{@html data?.profile?.content}
		</section>

		<section>
			<Accordion.Root class="c w-full">
				{#each data?.profile?.details as detail}
					<Accordion.Item class="s_accordion-item" value="item-{detail.id}">
						<Accordion.Trigger
							class="s_accordion-trigger text-xl font-semibold text-blue-900"
						>
							{detail.title}
						</Accordion.Trigger>

						<Accordion.Content
							class="s_accordion-content text-lg text-slate-600"
						>
							{@html detail.content}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</section>
	</article>
</div>

<NavigationPages datas={data?.profile?.nav_page} />

<style lang="postcss">
	.s_accordion-trigger > ol {
		@apply !list-inside !list-decimal;
	}
</style>
