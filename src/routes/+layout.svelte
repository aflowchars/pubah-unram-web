<script>
	import '../app.pcss';
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
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight"
				>myUnram</a
			>
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight"
				>TOEFL</a
			>
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight"
				>Result</a
			>
			<a href="/myUnram" class="px-2 text-xs font-semibold tracking-tight"
				>Contact</a
			>
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
		<div class="flex basis-1/3 items-center justify-center gap-1.5">
			<a href="/profile" class="p-2 text-sm font-medium hover:underline"
				>Profil</a
			>
			<button
				class="flex items-center gap-1 p-2 text-sm font-medium hover:underline"
			>
				Program

				<svg
					class="pointer-events-none h-3 w-3 text-gray-950"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					><path
						d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
					></path></svg
				>
			</button>
			<a href="/partnership" class="p-2 text-sm font-medium hover:underline"
				>Partnership</a
			>
			<a href="/galeri" class="p-2 text-sm font-medium hover:underline"
				>Galeri</a
			>
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
		</div>
	</section>
</nav>

<main class="relative z-10 mb-28 mt-[108px]">
	<slot />
</main>

<footer class="bg-blue-950 py-10 text-white">
	<div class="container max-w-screen-2xl px-10">
		<section class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex basis-1/3 items-center justify-start gap-2">
				<img
					class="h-16 w-16"
					src="/assets/general/unram-logo.png"
					alt="Unram Logo"
				/>

				<div
					class="pointer-events-none flex flex-1 flex-col items-start gap-0.5 text-base font-semibold leading-none"
				>
					<span>Pusat Bahasa</span>
					<span>Universitas Mataram</span>
				</div>
			</a>

			<div class="flex items-center gap-5">
				<a
					href="/"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900/50"
				>
					<svg
						class="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 256 256"
					>
						<path
							d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
						/>
					</svg>
				</a>

				<a
					href="/"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900/50"
				>
					<svg
						class="h-6 w-6 text-white"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
					>
						<path
							d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
						/>
					</svg>
				</a>

				<a
					href="/"
					class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900/50"
				>
					<svg
						class="h-6 w-6 text-white"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
					>
						<path
							d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"
						/>
					</svg>
				</a>
			</div>
		</section>

		<section class="mt-16 flex items-center justify-between">
			<a
				target="_blank"
				href="https://maps.app.goo.gl/YryQ9Nqs9bYW8dgg9"
				class="w-80 text-sm leading-relaxed hover:underline"
			>
				Jl. Majapahit No.62, Gomong, Kec. Selaparang Mataram, West Nusa
				Tenggara. 83115
			</a>

			<div class="flex items-center gap-5">
				<a href="tel:+6283472829129" class="text-sm">+6283472829129</a>

				<p class="text-sm">|</p>

				<a href="mailto:media@unram.ac.id" class="text-sm hover:underline"
					>media@unram.ac.id</a
				>
			</div>
		</section>

		<div class="my-10 h-px w-full bg-blue-900" />

		<section class="text-center text-sm">
			&copy; Copyright Pusat Bahasa 2024
		</section>
	</div>
</footer>
