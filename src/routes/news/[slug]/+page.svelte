<script>
	import { page } from '$app/stores';
	import { SeoHead } from '$lib/components/base';
	import * as Popover from '$lib/components/ui/popover';
	import { PUBLIC_STRAPI_BASE } from '$env/static/public';

	let showCopyLink = false;

	const copyToClipboard = () => {
		navigator.clipboard.writeText($page.url.href);

		showCopyLink = true;

		setTimeout(() => {
			showCopyLink = false;
		}, 3000);
	};

	export let data;

	const { category, content, hero, title, blogs } = data.blog;
</script>

<SeoHead {title} />

<div class="container mx-auto w-full max-w-screen-xl px-0 md:px-10">
	<header
		class="relative h-[50vh] w-full overflow-hidden rounded-b-xl sm:h-[75vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh]"
	>
		<div
			class="absolute z-10 h-full w-full bg-gradient-to-t from-slate-950/75 to-slate-950/15"
		/>

		<img
			class="relative z-0 h-full w-full object-cover object-top"
			src={`${PUBLIC_STRAPI_BASE}${hero?.thumbnail?.data?.attributes?.url}`}
			alt={hero?.thumbnail?.data?.attributes?.alternativeText}
		/>

		<div
			class="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-end pb-10"
		>
			<div
				class="container mx-auto flex h-full max-w-screen-lg flex-col items-center justify-between px-5 md:px-10"
			>
				<div />

				<div class="flex flex-col items-center gap-1">
					<div
						class="rounded-full bg-amber-400 px-2 py-1 text-xs font-semibold text-slate-950 md:px-3 md:py-1.5 xl:text-sm"
					>
						{category || 'Ini Kategori'}
					</div>

					<h1
						class="mt-1.5 text-center text-lg font-semibold leading-normal text-white md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal"
					>
						{title || 'Ini Judul'}
					</h1>
				</div>

				<div
					class="flex w-full items-center justify-between px-0 md:px-10 xl:px-0"
				>
					<section class="flex items-center justify-center gap-2.5">
						<div
							class="relative h-9 w-9 overflow-hidden rounded-full md:h-10 md:w-10 xl:h-12 xl:w-12"
						>
							<img
								src={`${PUBLIC_STRAPI_BASE}${hero?.author?.avatar?.data?.attributes?.url || '/images/default-avatar.png'}`}
								alt={hero?.author?.data?.attributes?.name}
							/>
						</div>

						<div class="text-white">
							<h5 class="text-sm font-semibold">{hero?.author?.name}</h5>

							<p class="text-xs text-slate-300">
								{hero?.author?.date || 'Ini Tanggal'}
							</p>
						</div>
					</section>

					<Popover.Root bind:open={showCopyLink}>
						<Popover.Trigger
							on:click={copyToClipboard}
							class="relative flex items-center gap-1 rounded-md border border-blue-950 bg-slate-100 px-3 py-2 text-blue-950 shadow-md md:px-4 md:py-2.5"
						>
							<svg
								class="h-4 w-4"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path
									d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"
								/>
							</svg>

							<span class="text-xs font-medium leading-4 md:text-sm">
								Copy Link
							</span>
						</Popover.Trigger>

						<Popover.Content
							class="flex w-fit items-center gap-1.5 border-none bg-blue-500 px-4 text-sm font-semibold text-white outline-none"
						>
							<svg
								class="h-5 w-5 text-white"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path
									d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
								/>
							</svg>

							<span> Berhasil </span>
						</Popover.Content>
					</Popover.Root>
				</div>
			</div>
		</div>
	</header>
</div>

<div
	class="container mx-auto mt-5 max-w-screen-lg px-5 md:px-10 lg:mt-8 xl:mt-10"
>
	<article class="content_wrap">
		{@html content}
	</article>
</div>

<div class="container mx-auto mb-20 max-w-screen-xl px-5 md:mt-10 md:px-16">
	<div class="py-5 md:py-10">
		<div class="h-px w-full bg-slate-100"></div>
	</div>

	<h3 class="text-2xl font-semibold">Berita Lainnya</h3>

	<div
		class="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-2.5"
	>
		{#each blogs.data as news}
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
</div>
