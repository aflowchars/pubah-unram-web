<script lang="ts">
	type Prev = {
		link: string;
		label: string;
	};

	type Next = {
		link: string;
		label: string;
	};

	type Datas = {
		prev: Prev;
		next: Next;
	};

	export let datas: Datas;
</script>

<nav
	class="mt-8 flex items-center justify-between bg-blue-50 py-5 md:mt-10 xl:mt-16"
>
	<div
		class="container mx-auto flex max-w-screen-xl items-center justify-between px-5 md:px-16"
	>
		<a
			href={datas.prev.link}
			class="flex basis-1/2 flex-col items-start text-left"
		>
			<h6 class="text-xs font-semibold text-slate-500">Sebelumnya</h6>

			<p class="line-clamp-1 text-base font-semibold text-slate-950 md:text-lg">
				{datas.prev.label}
			</p>
		</a>

		<a
			href={datas.next.link}
			class="flex basis-1/2 flex-col items-end text-right"
		>
			<h6 class="text-xs font-semibold text-slate-500">Selanjutnya</h6>

			<p class="line-clamp-1 text-base font-semibold text-slate-950 md:text-lg">
				{datas.next.label}
			</p>
		</a>
	</div>
</nav>
