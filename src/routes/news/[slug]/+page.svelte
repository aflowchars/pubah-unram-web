<script>
	import { page } from '$app/stores';

	const copyToClipboard = () => {
		// Copy the text inside the text field
		navigator.clipboard.writeText($page.url.href);

		// Alert the copied text
		alert('Copied the text: ' + $page.url.href);
	};
</script>

<div class="min-h-screen">
	<section
		class="container mx-auto mb-16 mt-16 max-w-screen-2xl px-10 xl:mb-40 xl:mt-20"
	>
		<div class="relative h-[75vh] w-full overflow-hidden">
			<div
				class="absolute z-10 h-full w-full bg-gradient-to-t from-gray-950/80 to-gray-950/15"
			/>

			<img
				class="relative z-0 h-full w-full object-cover object-top"
				src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum2.jpg"
				alt="Yudisium 2"
			/>

			<div
				class="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-end pb-10"
			>
				<div
					class="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-between"
				>
					<div />

					<div class="flex flex-col items-center gap-1">
						<a
							href="/"
							class="rounded-full bg-amber-400 px-3 py-1.5 text-sm font-medium text-gray-950"
						>
							Mahasiswa
						</a>

						<h1
							class="mt-1.5 text-center text-4xl font-semibold leading-normal text-white"
						>
							Luluskan 249 Mahasiswa, Dekan Berpesan, Nasib Baik berawal dari
							Ikhtiar
						</h1>
					</div>

					<div class="flex w-full items-center justify-between">
						<section class="flex items-center justify-center gap-2.5">
							<div class="relative h-12 w-12 overflow-hidden rounded-full">
								<img
									src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Avatar 1"
								/>
							</div>

							<div class="text-white">
								<h5 class="text-sm font-semibold">Olivia Rhye</h5>
								<p class="text-xs text-gray-300">20 Jan 2022</p>
							</div>
						</section>

						<button
							on:click={copyToClipboard}
							class="relative flex items-center gap-1 rounded-md border border-blue-950 bg-gray-100 px-4 py-2.5 text-blue-950 shadow-md"
						>
							<svg
								class="h-4 w-4"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path
									d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"
								/>
							</svg>

							<span class="text-sm font-medium leading-4"> Copy Link </span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="mx-auto mt-10 flex max-w-screen-lg flex-col items-center">
			<div
				class="mt-5 space-y-5 text-justify text-lg leading-loose text-gray-600"
			>
				<p>
					Mataram, 3 Februari 2024 – FKIP Unram luluskan 249 mahasiswa pada
					yudisium perdana di tahun 2024 pada Jumat (2/2/2024). Yudisium ini
					menampung dua periode lulusan yaitu periode Desember 2023 dan Januari
					2024.
				</p>

				<p>
					Acara berlangsung di Aula Gedung A FKIP Universitas Mataram dalam
					suasana khidmat, unsur dekanat, pimpinan, tenaga kependidikan, dan
					peserta yudisium dari kedua periode turut hadir memeriahkan acara ini.
					Wakil Dekan Bidang Akademik, Dr. Saprizal Hadisaputra, M.Sc., pada
					kesempatan tersebut, menyampaikan Surat Keputusan (SK) yudisium untuk
					kedua periode, Desember dan Januari, dengan detail sebagai berikut:
					Untuk yudisium periode Desember 2023, sebanyak 128 mahasiswa berhasil
					menyelesaikan pendidikan mereka. Sementara itu, untuk periode Januari
					2024, sebanyak 121 mahasiswa meraih gelar pada periode tersebut.
					Prestasi tersebut mencakup berbagai program studi di Fakultas Keguruan
					dan Ilmu Pendidikan (FKIP), menunjukkan keberhasilan dan kesuksesan
					dalam perjalanan akademis mereka.
				</p>

				<p>
					Rincian prestasi akademik juga mencakup jumlah Cumlaude yang
					mencengangkan. Pada periode Desember, sebanyak 26 mahasiswa meraih
					predikat Cumlaude, sedangkan pada periode Januari, sebanyak 21
					mahasiswa berhasil mencapainya. Jumlah ini mencerminkan dedikasi dan
					prestasi luar biasa mahasiswa dalam mencapai standar keunggulan
					akademis yang tinggi. Prestasi tersebut menjadi cerminan dari kualitas
					pendidikan yang diberikan oleh FKIP Universitas Mataram dan komitmen
					mahasiswa untuk mencapai keberhasilan di bidang akademis.
				</p>
			</div>
		</div>
	</section>
</div>
