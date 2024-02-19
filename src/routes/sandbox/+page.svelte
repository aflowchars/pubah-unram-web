<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root on:init={(embla) => console.log(embla)}>
	<Carousel.Content class="h-screen">
		<Carousel.Item>1</Carousel.Item>
		<Carousel.Item>2</Carousel.Item>
		<Carousel.Item>3</Carousel.Item>
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
