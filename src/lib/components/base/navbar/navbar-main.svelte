<script lang="ts">
	//---------------------------------------------------------//
	import { page } from '$app/stores';
	import * as Menubar from '$lib/components/ui/menubar';
	import { currentLang, isMobileNav } from '$lib/stores';
	//---------------------------------------------------------//
	import {
		MenuScaleIconRegular,
		NavArrowDownIconRegular,
		SearchIconRegular
	} from '$lib/icons/iconoir';
	//---------------------------------------------------------//
	export let datas: any;
	//---------------------------------------------------------//
</script>

<!-- Main bar -->
<section
	class="flex h-full w-full flex-1 items-center justify-between border-b border-slate-200/50 bg-slate-50 px-5 py-3 md:px-16"
>
	<!-- Logo -->
	<div class="flex items-center xl:basis-1/3">
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
	</div>

	<!-- Navigation -->
	<div class="hidden items-center justify-center gap-1.5 xl:flex xl:basis-1/3">
		{#each datas as data}
			{#if data.type === 'link'}
				<a
					href={data.link}
					class="relative rounded-lg px-3 py-2.5 text-sm transition-all duration-300 ease-in-out hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground {$page.url.href.includes(
						data.link
					)
						? 'rounded-sm bg-accent font-semibold text-blue-800'
						: 'font-medium'}"
				>
					{data.label}
				</a>
			{:else if data.type === 'dropdown'}
				<Menubar.Root>
					<Menubar.Menu>
						<Menubar.Trigger
							class="flex cursor-pointer items-center gap-1 border-none {$page.url.href.includes(
								'/programs'
							)
								? 'bg-accent'
								: 'bg-slate-50'} rounded-lg px-3 py-2.5 text-sm font-medium shadow-none transition-all duration-300 ease-in-out hover:bg-slate-100"
						>
							<span
								class={$page.url.href.includes('/programs')
									? 'rounded-sm font-semibold text-blue-800'
									: 'font-medium'}
							>
								{data.label}
							</span>

							<NavArrowDownIconRegular
								class="pointer-events-none h-4 w-4 stroke-2 {$page.url.href.includes(
									'/programs'
								)
									? 'rounded-sm bg-accent font-semibold text-blue-800'
									: 'font-normal text-slate-950'}"
							/>
						</Menubar.Trigger>

						<Menubar.Content class="mt-5">
							{#each data.menus as menu}
								<Menubar.Item
									href={menu.link}
									class="cursor-pointer py-2 text-sm {$page.url.href.includes(
										menu.link
									)
										? 'rounded-sm bg-accent font-semibold text-blue-800'
										: 'font-medium'}"
								>
									{menu.label}
								</Menubar.Item>

								<Menubar.Separator class="last:hidden" />
							{/each}
						</Menubar.Content>
					</Menubar.Menu>
				</Menubar.Root>
			{/if}
		{/each}
	</div>

	<!-- Search bar -->
	<div class="flex items-center justify-end gap-2 xl:basis-1/3">
		<div class="relative hidden w-48 lg:block">
			<SearchIconRegular
				class="pointer-events-none absolute right-4 top-0 h-full w-4 stroke-2 text-slate-500"
			/>

			<input
				type="text"
				class="w-full rounded-full border bg-slate-100 px-4 py-2 text-xs outline-0 transition-all duration-300 ease-in-out focus:bg-slate-50"
				placeholder="Pencarian"
			/>
		</div>

		<Menubar.Root class="hidden md:block">
			<Menubar.Menu>
				<Menubar.Trigger
					class="relative flex cursor-pointer items-center gap-2 rounded-lg	 py-2"
				>
					<span class="pointer-events-none text-sm font-semibold">
						{$currentLang === 'id' ? 'ID' : 'EN'}
					</span>

					<div
						class="pointer-events-none relative h-6 w-6 overflow-hidden rounded-full border border-slate-300"
					>
						<img
							class="h-full w-full object-cover"
							src={$currentLang === 'id'
								? 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Indonesia.png/800px-Flag_of_Indonesia.png'
								: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/320px-Flag_of_the_United_Kingdom.png'}
							alt="Indonesia Flag"
						/>
					</div>

					<NavArrowDownIconRegular
						class="pointer-events-none h-4 w-4 stroke-2 text-slate-950"
					/>
				</Menubar.Trigger>

				<Menubar.Content class="mt-3.5">
					<Menubar.Item
						on:click={() => {
							currentLang.set('id');
						}}
						class="flex cursor-pointer items-center gap-1.5 font-medium"
					>
						<div
							class="pointer-events-none relative h-6 w-6 overflow-hidden rounded-full border border-slate-300"
						>
							<img
								class="h-full w-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Indonesia.png/800px-Flag_of_Indonesia.png"
								alt="Indonesia Flag"
							/>
						</div>

						<span> Indonesia (ID) </span>
					</Menubar.Item>

					<Menubar.Separator />

					<Menubar.Item
						on:click={() => {
							currentLang.set('en');
						}}
						class="flex cursor-pointer items-center gap-1.5 font-medium"
					>
						<div
							class="pointer-events-none relative h-6 w-6 overflow-hidden rounded-full border border-slate-300"
						>
							<img
								class="h-full w-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/320px-Flag_of_the_United_Kingdom.png"
								alt="United Kingdom Flag"
							/>
						</div>

						<span> English (EN) </span>
					</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>

		<button
			type="button"
			on:click={() => isMobileNav.set(true)}
			class="flex flex-nowrap items-center gap-2 p-1 xl:hidden"
		>
			<MenuScaleIconRegular
				class="h-6 w-6 stroke-2 text-slate-950 md:h-5 md:w-5"
			/>

			<span class="hidden text-sm font-medium md:block">Menu</span>
		</button>
	</div>
</section>
