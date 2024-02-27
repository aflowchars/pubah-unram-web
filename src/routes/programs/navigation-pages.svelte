<script lang="ts">
	type Left = {
		link: string;
		label: string;
	};

	type Right = {
		link: string;
		label: string;
	};

	type Datas = {
		left: Left;
		right: Right;
	};

	export let datas: Datas;
</script>

<nav class="mt-20 flex items-center justify-between bg-blue-50 py-5">
	<div
		class="container mx-auto flex max-w-screen-2xl items-center justify-between px-5 md:px-10"
	>
		<a
			href={datas.left.link}
			class="flex basis-1/2 flex-col items-start text-left"
		>
			<h6 class="text-xs font-semibold text-gray-500">Sebelumnya</h6>

			<p class="line-clamp-1 text-base font-semibold text-gray-950 md:text-lg">
				{datas.left.label}
			</p>
		</a>

		<a
			href={datas.right.link}
			class="flex basis-1/2 flex-col items-end text-right"
		>
			<h6 class="text-xs font-semibold text-gray-500">Selanjutnya</h6>

			<p class="line-clamp-1 text-base font-semibold text-gray-950 md:text-lg">
				{datas.right.label}
			</p>
		</a>
	</div>
</nav>
