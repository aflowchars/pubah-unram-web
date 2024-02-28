<script>
	import { page } from '$app/stores';
	import { SeoHead } from '$lib/components/base';
	import * as Popover from '$lib/components/ui/popover';

	let showCopyLink = false;

	const copyToClipboard = () => {
		navigator.clipboard.writeText($page.url.href);

		showCopyLink = true;

		setTimeout(() => {
			showCopyLink = false;
		}, 3000);
	};

	let slug =
		$page.params.slug.replace(/-/g, ' ').charAt(0).toUpperCase() +
		$page.params.slug.replace(/-/g, ' ').slice(1);
</script>

<SeoHead title={slug} />

<div class="container mx-auto w-full max-w-screen-2xl px-0 md:px-10">
	<header
		class="relative h-[50vh] w-full overflow-hidden sm:h-[75vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh]"
	>
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
				class="container mx-auto flex h-full max-w-screen-lg flex-col items-center justify-between px-5 md:px-10"
			>
				<div />

				<div class="flex flex-col items-center gap-1">
					<a
						href="/"
						class="rounded-full bg-amber-400 px-2 py-1 text-xs font-semibold text-gray-950 md:px-3 md:py-1.5 xl:text-sm"
					>
						Mahasiswa
					</a>

					<h1
						class="mt-1.5 text-center text-lg font-semibold leading-normal text-white md:text-3xl xl:text-4xl"
					>
						Luluskan 249 Mahasiswa, Dekan Berpesan, Nasib Baik berawal dari
						Ikhtiar
					</h1>
				</div>

				<div
					class="flex w-full items-center justify-between px-0 md:px-10 xl:px-0"
				>
					<section class="flex items-center justify-center gap-2.5">
						<div
							class="relative h-9 w-9 overflow-hidden rounded-full md:h-10 md:w-10 xl:h-12 xl:w-12"
						>
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

					<Popover.Root bind:open={showCopyLink}>
						<Popover.Trigger
							on:click={copyToClipboard}
							class="relative flex items-center gap-1 rounded-md border border-blue-950 bg-gray-100 px-3 py-2 text-blue-950 shadow-md md:px-4 md:py-2.5"
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

							<span class="text-xs font-medium leading-4 md:text-sm">
								Copy Link
							</span>
						</Popover.Trigger>

						<Popover.Content
							class="flex w-fit items-center gap-1.5 border-none bg-blue-500 px-4 text-sm font-semibold text-white outline-none"
						>
							<svg
								class="h-5 w-5 text-white"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path
									d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
								/>
							</svg>

							<span> Berhasil </span>
						</Popover.Content>
					</Popover.Root>
				</div>
			</div>
		</div>
	</header>
</div>

<div
	class="container mx-auto mt-5 max-w-screen-lg px-5 md:px-10 lg:mt-8 xl:mt-10"
>
	<article class="content_wrap">
		<section>
			<p>
				<strong>Mataram, 3 Februari 2024 –</strong> FKIP Unram luluskan 249 mahasiswa
				pada yudisium perdana di tahun 2024 pada Jumat (2/2/2024). Yudisium ini menampung
				dua periode lulusan yaitu periode Desember 2023 dan Januari 2024.
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
				predikat Cumlaude, sedangkan pada periode Januari, sebanyak 21 mahasiswa
				berhasil mencapainya. Jumlah ini mencerminkan dedikasi dan prestasi luar
				biasa mahasiswa dalam mencapai standar keunggulan akademis yang tinggi.
				Prestasi tersebut menjadi cerminan dari kualitas pendidikan yang
				diberikan oleh FKIP Universitas Mataram dan komitmen mahasiswa untuk
				mencapai keberhasilan di bidang akademis.
			</p>
		</section>

		<section class="flex flex-col items-center gap-2.5 md:flex-row md:gap-5">
			<div class="md:basis-1/2">
				<img
					src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum2.jpg"
					alt="Yudisium 2"
				/>
			</div>

			<div class="md:basis-1/2">
				<img
					src="https://fkip.unram.ac.id/wp-content/uploads/2024/02/yudiisum-1200x825.jpg"
					alt="Yudisium 3"
				/>
			</div>
		</section>

		<section>
			<p>
				Dalam sambutannya, Dekan FKIP, Drs. H. Lalu Zulkifli, M.Si., Ph.D.,
				menciptakan momen berkesan dengan menyampaikan pesan yang penuh
				inspirasi kepada para lulusan. Beliau tidak hanya merayakan keberhasilan
				mereka dalam menyelesaikan pendidikan, tetapi juga memberikan arahan
				yang bernilai dalam menghadapi tantangan di dunia nyata. Dr. Lalu
				Zulkifli mendorong para sarjana baru untuk terus meningkatkan
				keterampilan komunikasi dan kolaborasi, menggarisbawahi pentingnya
				kerjasama tim dalam menghadapi dinamika masyarakat dan dunia kerja.
				Sambil memberikan nasihat bijak, beliau juga menekankan bahwa kesuksesan
				bukan hanya berasal dari upaya yang gigih, namun juga dari doa yang
				tulus. "Nasib yang baik adalah hasil dari ikhtiar yang sungguh-sungguh
				dan doa yang tulus, keduanya harus seimbang," ujarnya. Pesan tersebut
				memberikan motivasi yang mendalam kepada para lulusan, mengingatkan
				mereka bahwa perjalanan panjang setelah yudisium ini memerlukan
				kesiapan, kerja keras, dan keberanian untuk menjelajahi dunia baru yang
				menantang.
			</p>

			<p>
				Dalam momen yang penuh kebanggaan, perwakilan mahasiswa, Duwy Wulandary,
				seorang lulusan Magister Pendidikan Bahasa Inggris dengan prestasi
				akademik gemilang, membagikan pengalamannya dengan seluruh hadirin.
				Dengan Indeks Prestasi Kumulatif (IPK) sebesar 4,00, Duwy menjadi
				inspirasi bagi rekan-rekannya. Dalam ungkapannya yang tulus, Duwy
				menyampaikan rasa syukurnya kepada dosen dan tenaga kependidikan yang
				telah memberikan dukungan penuh selama perjalanan kuliah yang panjang.
				Dia menjelaskan bahwa peran mereka tidak hanya sebagai pengajar, tetapi
				juga sebagai pembimbing dan motivator yang membantu mahasiswa melewati
				tantangan akademis. Duwy juga menggarisbawahi betapa pentingnya belajar
				dari kegagalan sebagai langkah menuju kesuksesan. "Kegagalan bukanlah
				akhir dari segalanya, melainkan sebuah pelajaran berharga yang membentuk
				kita menjadi pribadi yang lebih kuat dan bijaksana," ucapnya dengan
				penuh semangat. Pesannya mengingatkan seluruh lulusan untuk melihat
				setiap rintangan sebagai peluang untuk tumbuh dan berkembang, serta
				menjadi landasan untuk meraih pencapaian lebih tinggi di masa
				depan.Acara diakhiri dengan doa bersama sebagai ungkapan syukur dan
				harapan untuk para lulusan. FKIP Universitas Mataram mengucapkan selamat
				atas capaian prestasi yang luar biasa ini, semoga menjadi pijakan yang
				kokoh untuk meraih kesuksesan di masa depan.
			</p>

			<br />

			<p>
				<strong>Untuk informasi lebih lanjut, silakan menghubungi:</strong><br
				/>
				Media Relations FKIP Universitas Mataram<br />
				Email:
				<a class="hover:underline" href="mailto:fkip@unram.ac.id">
					fkip@unram.ac.id
				</a>
				<br />
				Website:
				<a
					target="_blank"
					class="hover:underline"
					href="https://fkip.unram.ac.id"
				>
					https://fkip.unram.ac.id
				</a><br />
			</p>
		</section>
	</article>
</div>

<div
	class="container mx-auto mt-8 max-w-screen-lg border-t border-gray-200 px-5 pt-5 md:mt-10 md:px-10"
>
	<h3 class="text-2xl font-semibold">Berita Lainnya</h3>

	<div
		class="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-2.5"
	>
		{#each [1, 2, 3] as item}
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
</div>
