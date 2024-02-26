<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';

	import {
		NavArrowDownIconRegular,
		XMarkIconRegular
	} from '$lib/icons/iconoir';

	export let datas: any;

	console.log(datas);
</script>

<div
	class="fixed inset-0 z-[999] h-full min-h-screen w-full overflow-y-auto bg-white"
>
	<div class="h-1 w-full bg-blue-950" />

	<nav class="flex items-center justify-between border-b p-5">
		<a href="/" class="flex w-fit items-center justify-start gap-2">
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
			class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300"
		>
			<XMarkIconRegular class="h-6 w-6 stroke-2" />
		</button>
	</nav>

	<ul
		class="mt-5 flex flex-col items-center gap-2.5 overflow-y-auto px-5 md:mt-10 md:gap-10"
	>
		{#each datas as menu}
			<li
				class="w-full border-b border-gray-200 py-5 text-2xl font-medium tracking-tight md:px-5 md:py-10 md:text-5xl"
			>
				{#if menu.type === 'link'}
					<a href={menu.link}> {menu.label} </a>
				{:else if menu.type === 'dropdown'}
					<Accordion.Root>
						<Accordion.Item value="item-1" class="border-b-0">
							<Accordion.Trigger
								showIcon={false}
								class="flex w-full items-center justify-between border-b-0 py-0 shadow-none md:pb-4"
							>
								<span class="text-2xl font-medium tracking-tight md:text-5xl">
									{menu.label}
								</span>

								<NavArrowDownIconRegular
									class="h-6 w-6 stroke-1.5 md:h-10 md:w-10"
								/>
							</Accordion.Trigger>

							<Accordion.Content class="[&>div]:!py-0">
								<div class="mt-5 flex flex-col flex-nowrap">
									{#each menu.menus as child}
										<a
											href={child.link}
											class="py-2.5 text-lg text-gray-600 md:py-5 md:text-2xl"
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
