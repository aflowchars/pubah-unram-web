<section class="container mx-auto mt-20 max-w-screen-2xl px-10">
	<h3 class="text-2xl font-semibold">Berita Terbaru</h3>

	<div class="mt-5 grid w-full grid-cols-5 gap-2.5">
		{#each [1, 2, 3, 4, 5] as item}
			<a
				href="/"
				class="border border-transparent p-1 transition-all duration-300 ease-in-out hover:border-gray-950"
			>
				<picture>
					<img
						src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum2.jpg"
						alt="yudisium-2"
					/>
				</picture>

				<div class="space-y-5 p-1 pb-6 pt-3">
					<h5 class="line-clamp-2 text-base font-medium">
						Luluskan 249 Mahasiswa, Dekan Berpesan, Nasib Baik berawal dari
						Ikhtiar
					</h5>

					<p class="text-sm font-medium text-gray-600">2 jam yang lalu</p>
				</div>
			</a>
		{/each}
	</div>
</section>
