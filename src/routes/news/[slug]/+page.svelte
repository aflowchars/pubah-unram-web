<script>
	import { page } from '$app/stores';
	import { SeoHead } from '$lib/components/base';
	import * as Popover from '$lib/components/ui/popover';

	let showCopyLink = false;

	const copyToClipboard = () => {
		navigator.clipboard.writeText($page.url.href);

		showCopyLink = true;

		setTimeout(() => {
			showCopyLink = false;
		}, 3000);
	};

	export let data;

	let slug = data?.post[0]?.title?.rendered;
</script>

<SeoHead title={slug} />

<div class="container mx-auto w-full max-w-screen-2xl px-0 md:px-10">
	<header
		class="relative h-[50vh] w-full overflow-hidden sm:h-[75vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh]"
	>
		<div
			class="absolute z-10 h-full w-full bg-gradient-to-t from-gray-950/80 to-gray-950/15"
		/>

		<img
			class="relative z-0 h-full w-full object-cover object-top"
			src={data?.featuredMedia}
			alt="Yudisium 2"
		/>

		<div
			class="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-end pb-10"
		>
			<div
				class="container mx-auto flex h-full max-w-screen-lg flex-col items-center justify-between px-5 md:px-10"
			>
				<div />

				<div class="flex flex-col items-center gap-1">
					<a
						href={data?.category?.link || '/'}
						class="rounded-full bg-amber-400 px-2 py-1 text-xs font-semibold text-gray-950 md:px-3 md:py-1.5 xl:text-sm"
					>
						{data?.category?.name || 'Ini Kategori'}
					</a>

					<h1
						class="mt-1.5 text-center text-lg font-semibold leading-normal text-white md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal"
					>
						{data?.post[0]?.title?.rendered || 'Ini Judul'}
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
								src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Avatar 1"
							/>
						</div>

						<div class="text-white">
							<h5 class="text-sm font-semibold">Olivia Rhye</h5>
							<p class="text-xs text-gray-300">
								{data?.createdAt || 'Ini Tanggal'}
							</p>
						</div>
					</section>

					<Popover.Root bind:open={showCopyLink}>
						<Popover.Trigger
							on:click={copyToClipboard}
							class="relative flex items-center gap-1 rounded-md border border-blue-950 bg-gray-100 px-3 py-2 text-blue-950 shadow-md md:px-4 md:py-2.5"
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
		{@html data?.post[0]?.content?.rendered}
	</article>
</div>

<div
	class="container mx-auto mt-8 max-w-screen-2xl px-5 pt-5 md:mt-10 md:px-10"
>
	<h3 class="text-2xl font-semibold">Berita Lainnya</h3>

	<div
		class="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-2.5"
	>
		{#each [1, 2, 3, 4] as item}
			<a
				href="/news/luluskan-249-mahasiswa-dekan-berpesan-nasib-baik-berawal-dari-ikhtiar"
				class="border border-transparent transition-all duration-300 ease-in-out xl:p-1 xl:hover:border-gray-950"
			>
				<picture>
					<img
						src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum2.jpg"
						alt="yudisium-2"
					/>
				</picture>

				<div class="space-y-5 p-1 pt-3 xl:pb-6">
					<h5 class="line-clamp-2 text-base font-medium">
						Luluskan 249 Mahasiswa, Dekan Berpesan, Nasib Baik berawal dari
						Ikhtiar
					</h5>

					<p class="text-sm font-medium text-gray-600">2 jam yang lalu</p>
				</div>
			</a>
		{/each}
	</div>
</div>
