<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { PUBLIC_STRAPI_BASE } from '$env/static/public';

	export let data: any;
</script>

<header
	class="container relative mx-auto w-full max-w-screen-xl px-0 sm:px-5 md:px-16"
>
	<Carousel.Root
		plugins={[
			Autoplay({
				delay: 7500
			})
		]}
	>
		<Carousel.Content class="w-full">
			{#each data as slider}
				<Carousel.Item
					class="relative flex h-[75vh] max-h-[528px] w-full items-center justify-center overflow-hidden rounded-b-xl sm:h-full md:h-[75vh] md:max-h-[640px] lg:h-[75vh] xl:h-[75vh]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/80 via-stone-800/30 to-stone-950/5"
					/>

					<div
						class="container absolute z-20 flex h-full w-full max-w-screen-xl flex-col items-start justify-end p-5 pb-8 text-white sm:px-10 sm:pb-5 md:px-8 md:py-10 md:pb-12 lg:px-16 lg:pb-16"
					>
						<section class="flex flex-col items-start">
							<p class="text-xs font-semibold underline md:text-sm">
								{slider.category}
							</p>

							<h1
								class="mt-2.5 line-clamp-2 text-xl font-semibold md:w-10/12 lg:w-full lg:text-2xl xl:w-10/12 xl:text-3xl"
							>
								{slider?.title || 'Ini Judul'}
							</h1>

							<p
								class="mt-1 line-clamp-2 break-words text-sm leading-normal text-slate-300 md:w-10/12 md:leading-relaxed lg:w-9/12 xl:mt-3 xl:w-3/4 xl:text-base"
							>
								{slider?.description || 'Ini Deskripsi'}
							</p>

							<a
								href={slider?.link || '/'}
								class="relative mt-6 rounded-full bg-amber-300 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-xs transition-all duration-500 ease-in-out hover:bg-amber-400 xl:mt-10 xl:px-5 xl:py-3 xl:text-sm"
							>
								Selengkapnya
							</a>
						</section>
					</div>

					<img
						class="relative z-0 h-full w-full scale-100 object-cover object-top"
						src={`${PUBLIC_STRAPI_BASE}${slider?.thumbnail?.data?.attributes?.url}` ||
							'/assets/home/hero-2.jpg'}
						alt={slider?.thumbnail?.data?.attributes?.alternativeText ||
							'unsplash2'}
					/>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<div class="absolute bottom-5 right-5 z-50 flex gap-2.5 md:items-center">
			<Carousel.Previous />
			<Carousel.Next />
		</div>
	</Carousel.Root>
</header>
