<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import * as Accordion from '$lib/components/ui/accordion';

	import {
		NavArrowDownIconRegular,
		XMarkIconRegular
	} from '$lib/icons/iconoir';

	export let datas: any;

	import { isMobileNav } from '$lib/stores';

	let showNav = false;

	isMobileNav.subscribe((data) => {
		showNav = data;
	});
</script>

{#if showNav}
	<div
		transition:fly={{
			delay: 0,
			duration: 500,
			y: 96,
			opacity: 0,
			easing: quintOut
		}}
		class="fixed inset-0 z-[999] block h-full min-h-screen w-full overflow-y-auto bg-white xl:hidden"
	>
		<div class="h-1 w-full bg-blue-950" />

		<nav class="flex w-full items-center justify-between border-b p-5">
			<a
				on:click={() =>
					setTimeout(() => {
						isMobileNav.set(false);
					}, 500)}
				href="/"
				class="flex w-fit items-center justify-start gap-2"
			>
				<img
					class="h-12 w-12"
					src="/assets/general/unram-logo.png"
					alt="Unram Logo"
				/>

				<div
					class="pointer-events-none hidden flex-1 flex-col items-start gap-0.5 text-sm font-semibold leading-none md:flex"
				>
					<span>Pusat Bahasa</span>
					<span>Universitas Mataram</span>
				</div>
			</a>

			<button
				type="button"
				on:click={() => isMobileNav.set(false)}
				class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
			>
				<XMarkIconRegular class="h-6 w-6 stroke-2" />
			</button>
		</nav>

		<ul
			class="mt-5 flex w-full flex-col items-center gap-2.5 overflow-y-auto px-5 md:gap-0 lg:mt-5"
		>
			{#each datas as menu}
				<li class="flex w-full flex-col items-start">
					{#if menu.type === 'link'}
						<a
							on:click={() =>
								setTimeout(() => {
									isMobileNav.set(false);
								}, 500)}
							href={menu.link}
							class="w-full border-b border-gray-200 py-5 text-2xl font-medium tracking-tight md:px-5 md:py-5 md:text-3xl lg:py-5"
						>
							{menu.label}
						</a>
					{:else if menu.type === 'dropdown'}
						<Accordion.Root class="w-full border-b-0">
							<Accordion.Item value="item-1" class="w-full border-b-0">
								<Accordion.Trigger
									showIcon={false}
									class="w-full border-b border-gray-200 py-5 text-2xl font-medium tracking-tight md:px-5 md:py-5 lg:py-5"
								>
									<span class="text-2xl font-medium tracking-tight md:text-3xl">
										{menu.label}
									</span>

									<NavArrowDownIconRegular
										class="h-6 w-6 stroke-1.5 md:h-10 md:w-10"
									/>
								</Accordion.Trigger>

								<Accordion.Content class="w-full [&>div]:!py-0">
									<div
										class="mt-5 flex w-full flex-col flex-nowrap md:px-5 lg:px-8"
									>
										{#each menu.menus as child}
											<a
												on:click={() =>
													setTimeout(() => {
														isMobileNav.set(false);
													}, 500)}
												href={child.link}
												class="py-2.5 text-lg text-gray-600 md:py-5 md:text-lg lg:py-2.5"
											>
												{child.label}
											</a>
										{/each}
									</div>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}
