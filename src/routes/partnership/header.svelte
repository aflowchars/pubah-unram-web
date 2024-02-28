<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	export let data: any;
</script>

<header class="container relative w-full max-w-screen-2xl px-0 md:px-10">
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
			{#each data as slider}
				<Carousel.Item
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden md:h-[50vh] lg:h-[75vh] xl:h-[calc(50vh)]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/95 to-stone-950/10"
					/>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end p-5 pb-10 text-white md:p-10 lg:pb-16"
					>
						<section class="flex flex-col items-start">
							<div
								class="rounded-md bg-amber-400 px-2 py-1 text-xs font-semibold text-gray-950 md:text-sm"
							>
								Bekerjasama Dengan
							</div>

							<h1
								class="mt-2.5 line-clamp-2 text-xl font-semibold md:w-10/12 md:text-2xl lg:w-full xl:text-3xl"
							>
								{slider?.title || 'Ini Judul'}
							</h1>
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

		<div class="hidden md:block">
			<Carousel.Previous />
		</div>
		<div class="hidden md:block">
			<Carousel.Next />
		</div>
	</Carousel.Root>
</header>
