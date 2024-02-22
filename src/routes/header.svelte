<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	export let header: any;

	console.log(header);
</script>

<header class="relative w-full px-10">
	<Carousel.Root
		opts={{
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 7500
			})
		]}
	>
		<Carousel.Content class="w-full">
			{#each header as slider}
				<Carousel.Item
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden md:h-[60vh] lg:h-[75vh] xl:h-[calc(100vh_-_108px)]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/95 to-stone-950/10"
					/>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end p-10 text-white lg:pb-16 xl:pb-24"
					>
						<section class="flex flex-col items-start">
							<p class="text-sm font-semibold underline">#Program</p>

							<h1
								class="mt-2.5 text-2xl font-semibold md:w-10/12 lg:w-full xl:text-3xl"
							>
								{slider?.title || 'Ini Judul'}
							</h1>

							<p
								class="mt-1 line-clamp-2 break-words text-sm leading-relaxed text-gray-300 md:w-10/12 lg:w-9/12 xl:mt-3 xl:w-3/4 xl:text-base"
							>
								{slider?.description || 'Ini Deskripsi'}
							</p>

							<a
								href={slider?.link || '/'}
								class="relative mt-6 border-2 border-transparent bg-gray-50 px-3 py-2 text-xs font-bold text-gray-950 transition-all duration-300 ease-in-out hover:bg-gray-300 xl:mt-10 xl:px-5 xl:py-3 xl:text-sm"
							>
								Selengkapnya
							</a>
						</section>
					</div>

					<img
						class="relative z-0 h-full w-full scale-100 object-cover object-top"
						src={slider?.image?.src || '/assets/home/hero-2.jpg'}
						alt={slider?.image?.alt || 'unsplash2'}
					/>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</header>
