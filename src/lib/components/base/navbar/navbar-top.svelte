<script lang="ts">
	export let datas: any;
</script>

<!-- Border -->
<div class="block h-1.5 w-full bg-blue-950 md:hidden"></div>

<!-- Top bar -->
<section
	class="hidden items-center justify-between bg-blue-950 px-5 py-1.5 text-gray-50 md:flex md:px-12"
>
	<!-- Logo -->
	<div class="flex items-center gap-3">
		{#each datas.left as data}
			<a
				target="_blank"
				href={data.link}
				class="flex h-5 w-5 items-center justify-center"
			>
				<span
					class="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-2 [&>svg]:text-white"
				>
					<svelte:component this={data.icon} />
				</span>
			</a>
		{/each}
	</div>

	<!-- Backlink -->
	<div class="flex items-center">
		{#each datas.right as data}
			<a
				target="_blank"
				href={data.link}
				class="px-2 text-xs font-semibold tracking-tight"
			>
				{data.label}
			</a>
		{/each}
	</div>
</section>
