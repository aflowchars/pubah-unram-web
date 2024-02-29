<script lang="ts">
	type Data = {
		id: number;
		src: string;
		alt: string;
		title: string;
		description: string;
	};

	export let data: Data;
</script>

<div class="relative w-full px-0 md:px-10">
	<header
		class="container relative mx-auto h-[50vh] max-w-screen-xl overflow-hidden"
	>
		<div
			class="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-gray-950/80 to-gray-50/15"
		/>

		<img
			class="absolute inset-0 z-0 h-full w-full object-cover object-top"
			src={data.src || 'Ini Gambar'}
			alt={data.alt || 'Ini Deskripsi Gambar'}
		/>

		<div
			class="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-start justify-end p-5 py-8 text-white lg:py-10 xl:p-10"
		>
			<h1 class="text-xl font-medium md:text-2xl xl:text-3xl">
				{data.title || 'Ini Judul'}
			</h1>

			<p
				class="mt-1.5 w-full text-left text-sm text-gray-300 md:w-9/12 md:text-base xl:mt-2"
			>
				{data.description || 'Ini Deskripsi'}
			</p>
		</div>
	</header>
</div>
