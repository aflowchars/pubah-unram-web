<script lang="ts">
	import { page } from '$app/stores';
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<nav class="navbar fixed inset-0 z-50 h-20 w-full bg-gray-50">
	<!-- Border -->
	<div class="h-1 w-full bg-blue-950"></div>

	<!-- Top bar -->
	<section
		class="hidden items-center justify-between bg-blue-950 px-5 py-1.5 text-gray-50 md:flex md:px-12"
	>
		<!-- Logo -->
		<div class="flex items-center gap-3">
			<a
				class="flex h-5 w-5 items-center justify-center"
				href="https://instagram.com/"
			>
				<svg
					class="h-4 w-4 flex-shrink-0 text-gray-50"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 256 256"
				>
					<path
						d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"
					/>
				</svg>
			</a>

			<a
				class="flex h-5 w-5 items-center justify-center"
				href="https://instagram.com/"
			>
				<svg
					class="h-4 w-4 flex-shrink-0 text-gray-50"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
				>
					<path
						d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"
					/>
				</svg>
			</a>
		</div>

		<!-- Backlink -->
		<div class="flex items-center">
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight">
				myUnram
			</a>

			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight">
				SiReg
			</a>
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight">
				TOEFL
			</a>

			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight">
				Result
			</a>

			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight">
				Contact
			</a>
		</div>
	</section>

	<!-- Main bar -->
	<section
		class="flex items-center justify-between border-b border-gray-200/50 bg-gray-50 px-5 py-3 md:px-10"
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
		<div
			class="hidden items-center justify-center gap-1.5 xl:flex xl:basis-1/3"
		>
			<a
				href="/profile"
				class="px-3 py-1.5 text-sm hover:underline focus:bg-accent focus:text-accent-foreground {$page.url.href.includes(
					'/profile'
				)
					? 'rounded-sm bg-accent font-semibold text-blue-800'
					: 'font-medium'}"
			>
				Profil
			</a>

			<Menubar.Root>
				<Menubar.Menu>
					<Menubar.Trigger
						class="flex cursor-pointer items-center gap-1 border-none {$page.url.href.includes(
							'/programs'
						)
							? 'bg-accent'
							: 'bg-gray-50'} px-3 py-1.5 text-sm font-medium shadow-none hover:underline"
					>
						<span
							class={$page.url.href.includes('/programs')
								? 'rounded-sm font-semibold text-blue-800'
								: 'font-medium'}
						>
							Program
						</span>

						<svg
							class="pointer-events-none h-3 w-3 {$page.url.href.includes(
								'/programs'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-normal text-gray-950'}"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
						>
							<path
								d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
							/>
						</svg>
					</Menubar.Trigger>

					<Menubar.Content class="mt-5">
						<Menubar.Item
							href="/programs/language-test"
							class="cursor-pointer py-2 text-sm {$page.url.href.includes(
								'/language-test'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Language Test
						</Menubar.Item>

						<Menubar.Separator />

						<Menubar.Item
							href="/programs/translation-&-interpreting"
							class="cursor-pointer py-2 text-sm {$page.url.href.includes(
								'/translation-&-interpreting'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Translation & Interpreting
						</Menubar.Item>

						<Menubar.Separator />

						<Menubar.Item
							href="/programs/resource-centre-&-self-access-centre"
							class="cursor-pointer py-2 text-sm {$page.url.href.includes(
								'/resource-centre-&-self-access-centre'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Resource Centre & Self-Access Centre
						</Menubar.Item>

						<Menubar.Separator />

						<Menubar.Item
							href="/programs/bipa"
							class="cursor-pointer py-2 text-sm {$page.url.href.includes(
								'/bipa'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-medium'}"
						>
							BIPA
						</Menubar.Item>

						<Menubar.Separator />

						<Menubar.Item
							href="/programs/course"
							class="cursor-pointer py-2 text-sm {$page.url.href.includes(
								'/course'
							)
								? 'rounded-sm bg-accent font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Course
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
			</Menubar.Root>

			<a
				href="/partnership"
				class="px-3 py-1.5 text-sm hover:underline focus:bg-accent focus:text-accent-foreground {$page.url.href.includes(
					'/partnership'
				)
					? 'rounded-sm bg-accent font-semibold text-blue-800'
					: 'font-medium'}"
			>
				Partnership
			</a>

			<a
				href="/gallery"
				class="px-3 py-1.5 text-sm font-medium hover:underline focus:bg-accent focus:text-accent-foreground {$page.url.href.includes(
					'/gallery'
				)
					? 'rounded-sm bg-accent font-semibold text-blue-800'
					: 'font-medium'}"
			>
				Galeri
			</a>
		</div>

		<!-- Search bar -->
		<div class="flex items-center justify-end gap-1 xl:basis-1/3">
			<div class="relative hidden w-48 lg:block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="pointer-events-none absolute right-4 top-0 h-full w-4 text-gray-500"
					fill="currentColor"
					viewBox="0 0 256 256"
				>
					<path
						d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="pointer-events-none absolute right-4 top-0 h-full w-4 text-gray-500"
					fill="currentColor"
					viewBox="0 0 256 256"
				>
					<path
						d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
					/>
				</svg>

				<input
					type="text"
					class="w-full rounded-full border bg-gray-100 px-4 py-2 text-xs outline-0 transition-all duration-300 ease-in-out focus:bg-gray-50"
					placeholder="Pencarian"
				/>
			</div>

			<Menubar.Root class="hidden md:block">
				<Menubar.Menu>
					<Menubar.Trigger
						class="relative flex cursor-pointer items-center gap-2 py-2"
					>
						<span class="pointer-events-none text-sm font-semibold"> ID </span>

						<div
							class="pointer-events-none relative h-6 w-6 overflow-hidden rounded-full border border-gray-300"
						>
							<img
								class="h-full w-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Indonesia.png/800px-Flag_of_Indonesia.png"
								alt="Indonesia Flag"
							/>
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="pointer-events-none h-4 w-4"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<path
								d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
							/>
						</svg>
					</Menubar.Trigger>

					<Menubar.Content class="mt-3.5">
						<Menubar.Item class="font-medium">Available Soon!</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
			</Menubar.Root>

			<div class="flex flex-nowrap items-center gap-2 p-1 xl:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gray-950 md:h-5 md:w-5"
					fill="currentcolor"
					viewBox="0 0 256 256"
				>
					<path
						d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
					/>
				</svg>

				<span class="hidden text-sm font-medium md:block">Menu</span>
			</div>
		</div>
	</section>
</nav>
