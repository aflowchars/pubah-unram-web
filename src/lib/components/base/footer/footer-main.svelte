<script lang="ts">
	import FooterContact from './footer-contact.svelte';
	import FooterLogoSocmed from './footer-logo-socmed.svelte';

	export let datas: any;
</script>

<footer class="bg-blue-950 pt-10 text-white">
	<div class="container relative max-w-screen-xl px-5 md:px-16">
		<FooterLogoSocmed logo={datas?.logo} socmeds={datas?.social_media} />

		<FooterContact
			address={datas?.details?.address}
			telephone={datas?.details?.telephone}
			email={datas?.details?.email}
		/>

		<div class="my-10 h-px w-full bg-blue-900/25" />

		<ul
			class="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0"
		>
			{#each datas.menus as menu}
				<li class="text-sm md:text-base">
					<a href={menu?.link ?? '/404'}>{menu?.label || 'Ini Label'}</a>
				</li>
			{/each}
		</ul>

		<div class="relative mt-12 w-full md:mt-16">
			<img
				class="hidden h-auto w-full md:block"
				src="/assets/general/footer-text-pattern.png"
				alt="footer-text-pattern"
			/>

			<img
				class="block h-auto w-full md:hidden"
				src="/assets/general/footer-text-pattern-sm.png"
				alt="footer-text-pattern-sm"
			/>
		</div>
	</div>
</footer>
