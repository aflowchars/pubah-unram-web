<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import { PUBLIC_STRAPI_BASE } from '$env/static/public';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import { NavArrowRightIconRegular } from '$lib/icons/iconoir';

	export let data: any;
</script>

<section class="container mx-auto mt-8 max-w-screen-xl px-5 md:mt-16 md:px-16">
	<nav class="flex items-center justify-between gap-5">
		<h3 class="text-xl font-semibold md:text-2xl">Partner Kami</h3>

		<a
			href="/partnership"
			class="relative flex scale-100 items-center gap-1 rounded-full bg-amber-300 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-xs transition-all duration-300 ease-in-out hover:bg-amber-400 focus:scale-95"
		>
			<span class=""> Lihat semua </span>

			<NavArrowRightIconRegular class="h-4 w-4 stroke-2 text-slate-950" />
		</a>
	</nav>

	<div
		id="partner__kami--logo"
		class="relative mt-6 flex w-full flex-row flex-nowrap items-center justify-between gap-10 overflow-x-auto rounded-lg xl:mt-8"
	>
		<Carousel.Root
			opts={{
				align: 'start'
			}}
			plugins={[
				Autoplay({
					delay: 3000
				})
			]}
			class="w-full"
		>
			<Carousel.Content class="-ml-0 w-full">
				{#each data as carousel}
					<Carousel.Item
						class="w-full basis-full pl-0 sm:basis-1/2 md:pl-5 xl:basis-1/3"
					>
						<figure
							class="flex w-full items-center rounded-lg bg-slate-50 p-3.5"
						>
							<div
								class="relative h-16 w-16 flex-shrink-0 transition-all duration-300 ease-in-out"
							>
								<img
									class="h-full w-full object-contain"
									src={`${PUBLIC_STRAPI_BASE}${carousel?.image?.data?.attributes?.url}`}
									alt={carousel?.image?.data?.attributes?.alternativeText}
								/>
							</div>

							<div class="ml-2.5">
								<h5 class="w-full text-sm font-semibold leading-tight">
									{carousel?.title}
								</h5>

								<p class="mt-1 text-sm text-slate-500">
									{carousel?.description}
								</p>
							</div>
						</figure>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</section>
