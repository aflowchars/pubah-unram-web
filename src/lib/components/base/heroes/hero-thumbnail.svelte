<script lang="ts">
	type Images = {
		src: string;
		alt: string;
	};

	type Data = {
		title: string;
		description: string;
		image: Images;
	};

	export let data: Data;
</script>

<div class="container relative mx-auto w-full max-w-screen-xl px-0 md:px-16">
	<header class="relative h-[50vh] max-h-[640px] overflow-hidden rounded-b-xl">
		<div
			class="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-slate-950/70 to-slate-50/15"
		/>

		<img
			class="absolute inset-0 z-0 h-full w-full object-cover object-top"
			src={data.image.src || 'Ini Gambar'}
			alt={data.image.alt || 'Ini Deskripsi Gambar'}
		/>

		<div
			class="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-start justify-end p-5 py-8 text-white lg:py-10 xl:p-10"
		>
			<h1 class="text-xl font-medium md:text-2xl">
				{data.title || 'Ini Judul'}
			</h1>

			<p
				class="mt-1.5 w-full text-left text-sm text-slate-300 md:w-9/12 md:text-base"
			>
				{data.description || 'Ini Deskripsi'}
			</p>
		</div>
	</header>
</div>
