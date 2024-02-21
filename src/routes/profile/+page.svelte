<script>
	import * as Accordion from '$lib/components/ui/accordion';

	import { SeoHead } from '$lib/components/base';
</script>

<SeoHead title="Profile" />

<header
	class="container relative h-[50vh] max-w-screen-2xl overflow-hidden px-10"
>
	<div
		class="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-gray-950/80 to-gray-50/15"
	/>

	<img
		class="absolute inset-0 z-0 h-full w-full object-cover"
		src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		alt="test 123"
	/>

	<div
		class="relative z-20 flex h-full flex-col items-start justify-end py-10 text-white"
	>
		<h1 class="text-4xl font-medium">Profil</h1>

		<p class="mt-2 w-9/12 text-left text-lg text-gray-300">
			Profil dari Pusat Bahasa yang merupakan salah satu institusi yang mewadahi
			berbagai program bahasa.
		</p>
	</div>
</header>

<section class="mx-auto mt-10 max-w-screen-lg px-10">
	<h3 class="text-2xl font-semibold text-blue-900">Sejarah</h3>

	<div class="mt-2.5 space-y-5 text-lg leading-relaxed text-gray-600">
		<p>
			Pertama kali didirikan sebagai Laboratorium Bahasa Universitas Mataram
			pada tahun 1975, dua belas tahun setelah berdirinya Universitas Mataram
			dengan Drs. Abdul Karim Sahidu sebagai orang yang pertama mendapat tugas
			sebagai ketua. Pada tahun 1992 jabatan ketua diserahkan kepada Drs. M.
			Husni Mu’adz, M.A., Ph.D. Pada era kepemimpinan kedua ini, Laboratorium
			Bahasa berubah menjadi Pusat Studi Bahasa dan Kebudayaan (PSBK). Sejak
			itu, kegiatan yang dilaksanakan tidak semata memberikan pelayanan bahasa
			teratpi juga mulai berkembang pada penelitian bidang kebahasaan,
			pengajaran dan kebudayaan.
		</p>

		<p>
			Untuk menunjang upaya peningkatan mutu sumber daya manusia (SDM) khususnya
			lulusan yang dihasilkannya, Universitas Mataram telah berinisiatif untuk
			meningkatkan fungsi dan peranan Laboratorium Bahasa khususnya dalam
			program pelayanan bahasa.
		</p>
	</div>
</section>

<section class="mx-auto mt-5 max-w-screen-lg px-10">
	<Accordion.Root class="w-full">
		<Accordion.Item value="item-1">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Visi Kami
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				Mewujudkan Unit Penunjang Akademik Bahasa Unram sebagai Center of
				Excellence dalam Pelayanan Bahasa.
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-2">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Misi Kami
			</Accordion.Trigger>

			<Accordion.Content>
				<ol class="list-inside list-decimal text-lg text-gray-600">
					<li>
						Melaksanakan Program-program dan layanan bahasa secara efektif dan
						berkualitas
					</li>

					<li>
						Menyediakan sarana dan prasarana pembelajaran bahasa yang memadai
					</li>

					<li>
						Memiliki sumber daya manusia (SDM) administrasi dan akademis yang
						professional
					</li>

					<li>
						Menyelenggarakan kegiatan administrasi secara transparan dan
						akuntabilitas
					</li>

					<li>
						Berpartisipasi dalam pemberdayaan masyarakat baik di dalam maupun di
						luar kampus dengan melaksanakan berbagai training.
					</li>

					<li>
						Meningkatkan kualitas pembelajaran Bahasa Inggris untuk non-jurusan
						Bahasa Inggris (MKU/MKDK).
					</li>

					<li>
						Menjadikan Pusat Bahasa sebagai pusat pelayanan dan informasi bahasa
						baik secara internal maupun eksternal.
					</li>
				</ol>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Goals Kami
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				<p class="leading-relaxed">
					Pusat Bahasa UNRAM berharap dapat mencapai tujuan-tujuan berikut
					secara bertahap:
				</p>

				<ol
					class="mt-2.5 list-inside list-decimal text-lg leading-relaxed text-gray-600"
				>
					<li>
						Meningkatkan kualitas program dan layanan di Pusat Bahasa UNRAM
						melalui pengembangan kursus bahasa Inggris dan bahasa Indonesia,
						penerjemahan, pelatihan pembelajaran bahasa, dan pengujian bahasa.
					</li>

					<li>
						Meningkatkan kualitas sumber daya manusia (dosen dan staf
						administrasi) melalui berbagai pelatihan pembinaan dan pengembangan
						SDM.
					</li>

					<li>
						Meningkatkan kualitas layanan melalui pengembangan fasilitas dan
						infrastruktur untuk mendukung pelaksanaan program Pusat Bahasa
						UNRAM.
					</li>

					<li>
						Meningkatkan transparansi manajemen Pusat Bahasa UNRAM melalui
						peningkatan sistem informasi, administrasi, dan manajemen keuangan.
					</li>
				</ol>
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-4">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Struktur Organisasi
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				<div class="relative h-auto w-full">
					<img
						src="/assets/general/struktur-organisasi.png"
						alt="struktur upt pusat bahasa"
					/>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>

<section class="mt-20"></section>
