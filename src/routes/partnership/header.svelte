<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<header class="relative mx-auto w-full max-w-screen-2xl px-10">
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
			<Carousel.Item class="">
				<figure
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden xl:h-[60vh]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/60 to-stone-950/10"
					/>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end gap-2 p-10 text-white xl:pb-16"
					>
						<div class="flex w-full flex-col items-start xl:w-2/4">
							<div
								class="relative rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-semibold text-gray-950"
							>
								Bekerjasama Dengan
							</div>

							<h1 class="mt-4 text-3xl font-semibold">BAPPEDA NTB</h1>
						</div>
					</div>

					<img
						class="relative z-0 h-full w-full scale-125 object-cover object-top"
						src="/assets/home/hero-1.jpg"
						alt="unsplash1"
					/>
				</figure>
			</Carousel.Item>

			<Carousel.Item class="">
				<figure
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden xl:h-[60vh]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/60 to-stone-950/10"
					/>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end gap-2 p-10 text-white xl:pb-16"
					>
						<div class="flex w-full flex-col items-start xl:w-2/4">
							<div
								class="relative rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-semibold text-gray-950"
							>
								Bekerjasama Dengan
							</div>

							<h1 class="mt-4 text-3xl font-semibold">SMPN 2 Mataram</h1>
						</div>
					</div>

					<img
						class="relative z-0 h-full w-full scale-125 object-cover object-top"
						src="/assets/home/hero-2.jpg"
						alt="unsplash2"
					/>
				</figure>
			</Carousel.Item>
		</Carousel.Content>

		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</header>

<section></section>
