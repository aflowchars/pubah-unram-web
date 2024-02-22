<section
	class="container mx-auto mb-16 mt-16 max-w-screen-2xl px-10 xl:mb-40 xl:mt-20"
>
	<h3 class="text-2xl font-semibold">Berita Terbaru</h3>

	<div
		class="mt-5 grid w-full grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2.5"
	>
		{#each [1, 2, 3, 4, 5, 6, 7, 8] as item}
			<a
				href="/news/luluskan-249-mahasiswa-dekan-berpesan-nasib-baik-berawal-dari-ikhtiar"
				class="border border-transparent transition-all duration-300 ease-in-out xl:p-1 xl:hover:border-gray-950"
			>
				<picture>
					<img
						src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum2.jpg"
						alt="yudisium-2"
					/>
				</picture>

				<div class="space-y-5 p-1 pt-3 xl:pb-6">
					<h5 class="line-clamp-2 text-base font-medium">
						Luluskan 249 Mahasiswa, Dekan Berpesan, Nasib Baik berawal dari
						Ikhtiar
					</h5>

					<p class="text-sm font-medium text-gray-600">2 jam yang lalu</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-8 flex justify-center md:mt-12 xl:mt-10">
		<button
			class="relative z-10 border border-transparent bg-amber-300 px-6 py-3 text-sm font-semibold text-gray-950 transition-all duration-300 ease-in-out hover:border-gray-950"
		>
			Baca Lebih Banyak
		</button>
	</div>
</section>
