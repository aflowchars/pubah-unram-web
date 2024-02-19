<script lang="ts">
	import { page } from '$app/stores';
	import * as Popover from '$lib/components/ui/popover';

	$: {
		console.log($page.url.href);
	}
</script>

<nav class="navbar fixed inset-0 z-50 h-20 w-full bg-gray-50">
	<!-- Border -->
	<div class="h-1 w-full bg-blue-950"></div>

	<!-- Top bar -->
	<section
		class="flex items-center justify-between bg-blue-950 px-12 py-1.5 text-gray-50"
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
		class="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-10 py-3"
	>
		<!-- Logo -->
		<a href="/" class="flex basis-1/3 items-center justify-start gap-2">
			<img
				class="h-12 w-12"
				src="/assets/general/unram-logo.png"
				alt="Unram Logo"
			/>

			<div
				class="pointer-events-none flex flex-1 flex-col items-start gap-0.5 text-sm font-semibold leading-none"
			>
				<span>Pusat Bahasa</span>
				<span>Universitas Mataram</span>
			</div>
		</a>

		<!-- Navigation -->
		<div class="hidden basis-1/3 items-center justify-center gap-1.5 xl:flex">
			<a href="/profile" class="p-2 text-sm font-medium hover:underline">
				Profil
			</a>

			<Popover.Root>
				<Popover.Trigger
					class="flex items-center gap-1 p-2 text-sm font-medium hover:underline"
				>
					<span
						class={$page.url.href.includes('/programs')
							? 'font-semibold text-blue-800'
							: 'font-medium'}
					>
						Program
					</span>

					<svg
						class="pointer-events-none h-3 w-3 {$page.url.href.includes(
							'/programs'
						)
							? 'font-semibold text-blue-800'
							: 'font-normal text-gray-950'}"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
					>
						<path
							d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
						/>
					</svg>
				</Popover.Trigger>

				<Popover.Content class="mt-5">
					<nav class="flex flex-col items-start">
						<a
							href="/programs/language-test"
							class="py-2 text-sm hover:underline {$page.url.href.includes(
								'/language-test'
							)
								? 'font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Language Test
						</a>

						<a
							href="/programs/translation-&-interpreting"
							class="py-2 text-sm hover:underline {$page.url.href.includes(
								'/translation-&-interpreting'
							)
								? 'font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Translation & Interpreting
						</a>

						<a
							href="/programs/resource-centre-&-self-access-centre"
							class="py-2 text-sm hover:underline {$page.url.href.includes(
								'/resource-centre-&-self-access-centre'
							)
								? 'font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Resource Centre & Self-Access Centre
						</a>

						<a
							href="/programs/bipa"
							class="py-2 text-sm hover:underline {$page.url.href.includes(
								'/bipa'
							)
								? 'font-semibold text-blue-800'
								: 'font-medium'}"
						>
							BIPA
						</a>

						<a
							href="/programs/course"
							class="py-2 text-sm hover:underline {$page.url.href.includes(
								'/course'
							)
								? 'font-semibold text-blue-800'
								: 'font-medium'}"
						>
							Course
						</a>
					</nav>
				</Popover.Content>
			</Popover.Root>

			<a
				href="/partnership"
				class="p-2 text-sm hover:underline {$page.url.href.includes(
					'/partnership'
				)
					? 'font-semibold text-blue-800'
					: 'font-medium'}"
			>
				Partnership
			</a>

			<a
				href="/gallery"
				class="p-2 text-sm font-medium hover:underline {$page.url.href.includes(
					'/gallery'
				)
					? 'font-semibold text-blue-800'
					: 'font-medium'}"
			>
				Galeri
			</a>
		</div>

		<!-- Search bar -->
		<div class="flex basis-1/3 items-center justify-end gap-4">
			<div class="relative w-64">
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
				<input
					type="text"
					class="w-full rounded-full border bg-gray-100 px-4 py-2 text-xs outline-0 transition-all duration-300 ease-in-out focus:bg-gray-50"
					placeholder="Pencarian"
				/>
			</div>

			<button class="flex items-center gap-2">
				<span class="text-sm font-semibold"> ID </span>

				<div
					class="relative h-6 w-6 overflow-hidden rounded-full border border-gray-300"
				>
					<img
						class="h-full w-full object-cover"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Indonesia.png/800px-Flag_of_Indonesia.png"
						alt="Indonesia Flag"
					/>
				</div>

				<svg
					class="h-4 w-4"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
				>
					<path
						d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
					/>
				</svg>
			</button>
		</div>
	</section>
</nav>
