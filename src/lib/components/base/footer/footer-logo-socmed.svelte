<script lang="ts">
	export let logo: any;
	export let socmeds: any;
</script>

<section class="flex items-center justify-between">
	<a
		href={logo.link}
		class="flex basis-1/3 flex-col items-start justify-start gap-2 md:flex-row md:items-center"
	>
		<img
			class="h-10 w-10 md:h-16 md:w-16"
			src={logo.image.src}
			alt={logo.image.alt}
		/>

		<div
			class="pointer-events-none flex flex-1 flex-col items-start gap-0.5 text-base font-semibold leading-none text-white"
		>
			<span>Pusat Bahasa</span>
			<span>Universitas Mataram</span>
		</div>
	</a>

	<div class="flex items-center gap-2.5 md:gap-5">
		{#each socmeds as socmed}
			<a
				target="_blank"
				href={socmed.link}
				class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900/50 md:h-10 md:w-10"
			>
				<span
					class="[&>svg]:stroke-1.5 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white md:[&>svg]:h-5 md:[&>svg]:w-5"
				>
					<svelte:component this={socmed.icon} />
				</span>
			</a>
		{/each}
	</div>
</section>
