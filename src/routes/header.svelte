<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
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
			<Carousel.Item class="">
				<figure
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden xl:h-[calc(100vh_-_108px)]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/60 to-stone-950/10"
					></div>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end gap-2 p-10 text-white xl:pb-32"
					>
						<div class="flex w-full flex-col items-start xl:w-2/4">
							<a
								href="/program"
								class="rounded-md bg-blue-950 px-2 py-1 text-xs font-semibold text-white"
							>
								Program
							</a>

							<h1 class="mt-2 text-3xl font-semibold">
								Halo teman semua ayo kita sambut
							</h1>

							<p class="mt-3 text-sm text-stone-100">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Nostrum tempora ab quia at molestiae temporibus suscipit
								explicabo voluptas blanditiis mollitia earum alias praesentium
								adipisci quaerat officia, sapiente cumque iure assumenda.
							</p>
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
					class="relative flex h-[50vh] w-full items-center justify-center overflow-hidden xl:h-[calc(100vh_-_108px)]"
				>
					<div
						class="absolute z-10 h-full w-full bg-gradient-to-t from-stone-950/60 to-stone-950/10"
					></div>

					<div
						class="absolute z-20 flex h-full w-full flex-col items-start justify-end gap-2 p-10 text-white xl:pb-32"
					>
						<div class="flex w-full flex-col items-start xl:w-2/4">
							<a
								href="/program"
								class="rounded-md bg-blue-950 px-2 py-1 text-xs font-semibold text-white"
							>
								Program
							</a>

							<h1 class="mt-2 text-3xl font-semibold">
								Halo teman semua ayo kita sambut
							</h1>

							<p class="mt-3 text-sm text-stone-100">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Nostrum tempora ab quia at molestiae temporibus suscipit
								explicabo voluptas blanditiis mollitia earum alias praesentium
								adipisci quaerat officia, sapiente cumque iure assumenda.
							</p>
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
