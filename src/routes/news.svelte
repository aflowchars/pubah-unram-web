<script lang="ts">
	import { PUBLIC_STRAPI_BASE } from '$env/static/public';

	export let data: any;
</script>

<section
	class="container mx-auto mt-10 max-w-screen-xl px-5 md:mt-16 md:px-16 xl:mt-20"
>
	<nav class="flex items-center justify-between gap-5">
		<h3 class="text-2xl font-semibold">Berita Terbaru</h3>

		<a
			href="/partnership"
			class="scale-100 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-none transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-inner"
		>
			Lihat semua
		</a>
	</nav>

	<div class="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each data.data as news}
			<a
				href="/news/{news?.attributes?.slug}"
				class="group relative rounded-lg border border-transparent bg-slate-100 p-2 pb-6 transition-all duration-300 ease-in-out hover:border-slate-950"
			>
				<div
					class="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
				>
					<svg
						class="h-6 w-6 stroke-1.5 text-slate-950"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.17137 14.8284L14.8282 9.17152M14.8282 9.17152H9.87848M14.8282 9.17152V14.1213"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<div class="relative h-64 w-full overflow-hidden rounded-lg">
					<img
						class="relative z-0 h-full w-full object-cover"
						src={`${PUBLIC_STRAPI_BASE}${news?.attributes?.hero?.thumbnail?.data?.attributes?.url}`}
						alt="yudisium-2"
					/>

					<div
						class="absolute left-3 top-3 z-10 rounded-full bg-amber-300 px-3 py-1.5 text-[0.675rem] font-bold"
					>
						{news?.attributes?.category}
					</div>
				</div>

				<div class="mt-4 space-y-3 p-1">
					<h5 class="line-clamp-2 text-base font-semibold">
						{news?.attributes?.title || 'Ini Judul'}
					</h5>

					<p class="line-clamp-2 text-sm font-medium text-slate-600">
						{news?.attributes?.excerpt || 'Ini Deskripsi'}
					</p>
				</div>

				<section class="mt-6 flex items-end gap-2.5">
					<div class="relative h-8 w-8 overflow-hidden rounded-full">
						<img
							class="h-full w-full object-cover"
							src={`${PUBLIC_STRAPI_BASE}${news?.attributes?.hero?.author?.avatar?.data?.attributes?.url}`}
							alt={news?.attributes?.hero?.author?.avatar?.data?.attributes
								?.alternativeText}
						/>
					</div>

					<div class="-mb-0.5">
						<h6 class="text-xs font-semibold">
							{news?.attributes?.hero?.author?.name}
						</h6>

						<p class="text-xs font-medium text-slate-600">
							{news?.attributes?.hero?.author?.date}
						</p>
					</div>
				</section>
			</a>
		{/each}
	</div>
</section>
