<!-- <script>
	// @ts-nocheck

	import * as Dialog from '$lib/components/ui/dialog';

	let selectedCarousel = 0;

	let carouselData = [
		{
			id: 1,
			src: 'https://a0.muscache.com/im/pictures/miso/Hosting-26820964/original/8aa9fa91-f2fd-471d-826b-df430dd6f77a.jpeg?im_w=1200'
		},
		{
			id: 2,
			src: 'https://a0.muscache.com/im/pictures/miso/Hosting-26820964/original/2e146ea8-8600-4de3-b08f-1aa7f4fd4416.jpeg?im_w=720'
		},
		{
			id: 3,
			src: 'https://a0.muscache.com/im/pictures/miso/Hosting-26820964/original/b0538563-5bd6-488d-afd1-fcb95a7f5293.jpeg?im_w=720'
		},
		{
			id: 4,
			src: 'https://a0.muscache.com/im/pictures/miso/Hosting-26820964/original/6998f432-feae-4a85-a6ee-c1faa17bf55c.jpeg?im_w=720'
		},
		{
			id: 5,
			src: 'https://a0.muscache.com/im/pictures/miso/Hosting-26820964/original/67e39d5f-2d64-4ab0-aeee-535a55acff1d.jpeg?im_w=720'
		}
	];

	$: {
		console.log(selectedCarousel);
	}

	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let emblaApi;

	function onInit(event) {
		emblaApi = event.detail;
		console.log(emblaApi.slideNodes());
	}
</script>

<div class="embla" use:emblaCarouselSvelte on:emblaInit={onInit}>...</div>

<h1>Test</h1>

<Dialog.Root>
	{#each carouselData as item}
		<Dialog.Trigger on:click={() => (selectedCarousel = item.id - 1)}>
			Carousel {item.id}
		</Dialog.Trigger>
	{/each}

	<Dialog.Content>
		<div class="h-96 bg-red-50">
			<img src={carouselData[selectedCarousel]?.src} alt="test" />
		</div>
	</Dialog.Content>
</Dialog.Root>

<p>
	{selectedCarousel}
</p> -->

<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let api: CarouselAPI;

	function sliderTo(index: number) {
		if (api) {
			api.on('init', () => {
				api.scrollTo(index);
			});
		}
	}

	$: test = sliderTo(1);
</script>

<Carousel.Root bind:api>
	<Carousel.Content>
		<Carousel.Item class="h-[32rem] w-full">0</Carousel.Item>
		<Carousel.Item class="h-[32rem] w-full">1</Carousel.Item>
		<Carousel.Item class="h-[32rem] w-full">2</Carousel.Item>
	</Carousel.Content>
</Carousel.Root>

<button on:click={test}> Goto 1 </button>
