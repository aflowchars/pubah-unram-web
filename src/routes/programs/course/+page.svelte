<script>
	import * as Accordion from '$lib/components/ui/accordion';

	import { SeoHead } from '$lib/components/base';
</script>

<SeoHead title="Program Kursus" />

<div class="w-full px-10">
	<header
		class="container relative mx-auto h-[50vh] max-w-screen-2xl overflow-hidden"
	>
		<div
			class="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-gray-950/80 to-gray-50/15"
		/>

		<img
			class="absolute inset-0 z-0 h-full w-full object-cover object-top"
			src="https://images.unsplash.com/photo-1545104578-034bf8bfe03d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="test 123"
		/>

		<div
			class="absolute z-20 flex h-full w-full flex-col items-start justify-end py-10 text-white"
		>
			<h1 class="text-4xl font-medium">Profil</h1>

			<p class="mt-2 w-9/12 text-left text-lg text-gray-300">
				Profil dari Pusat Bahasa yang merupakan salah satu institusi yang
				mewadahi berbagai program bahasa.
			</p>
		</div>
	</header>
</div>

<section
	class="mx-auto mt-10 max-w-screen-lg px-10 text-justify text-lg leading-loose text-gray-600"
>
	<h3 class="text-2xl font-semibold text-gray-950">Kursus Bahasa Asing</h3>

	<div class="mt-2.5 space-y-5 text-lg leading-relaxed text-gray-600">
		<p>
			Layanan kursus bahasa asing di UPA Bahasa Universitas Mataram menyediakan
			pelayanan kursus bahasa Inggris dan bahasa Mandarin. Untuk pelayanan
			kursus Bahasa Inggris, ditawarkan beberapa jenis kelas bahasa dengan level
			atau tingkatan yang bervariasi. Adapun jenis-jenis kelas bahasa Inggris
			yang ditawarkan meliputi:
		</p>
	</div>

	<Accordion.Root class="mt-5 w-full">
		<Accordion.Item value="item-1">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				English for Children (EFC)
			</Accordion.Trigger>

			<Accordion.Content class="space-y-5 text-lg text-gray-600">
				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">EFC 4</h5>

					<p>
						Kelas ini dirancang khusus untuk anak-anak di kelas 4 Sekolah Dasar
						di Indonesia, dengan fokus pada pengenalan bahasa Inggris melalui
						pendekatan yang menyenangkan dan interaktif. Dalam 30 pertemuan ini,
						anak-anak akan dibimbing untuk mengembangkan keterampilan
						mendengarkan, berbicara, membaca, dan menulis. Materi pembelajaran
						mencakup kosakata sehari-hari, frasa sederhana, dan aktivitas
						berbasis permainan untuk memotivasi partisipasi aktif.
					</p>

					<p class="my-4">
						Tujuan Pembelajaran bahasa Inggris pada tingkat ini:
					</p>

					<ol class="list-inside list-decimal">
						<li>
							Meningkatkan pemahaman mendengarkan melalui cerita pendek dan
							lagu-lagu berbahasa Inggris.
						</li>

						<li>
							Memperkenalkan frasa dan kalimat sederhana dalam konteks
							sehari-hari.
						</li>

						<li>
							Melibatkan peserta dalam percakapan kelompok untuk memperkuat
							keterampilan berbicara.
						</li>

						<li>
							Mendorong penulisan kreatif melalui kegiatan menulis cerita pendek
							atau surat sederhana.
						</li>

						<li>
							Memperkenalkan lagu-lagu berbahasa Inggris untuk meningkatkan
							keterampilan mendengarkan.
						</li>
					</ol>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">EFC 5</h5>

					<p>
						Kursus ini ditujukan untuk anak-anak di kelas 5 Sekolah Dasar di
						Indonesia, dengan penekanan pada memperdalam pemahaman bahasa
						Inggris melalui berbagai kegiatan yang menarik. Selama 30 pertemuan,
						peserta belajar akan terlibat dalam kegiatan interaktif untuk
						memperkaya kosakata, meningkatkan keterampilan membaca, dan
						memperkuat kemampuan berbicara dan menulis.
					</p>

					<p class="my-4">Tujuan Pembelajaran:</p>

					<ol class="list-inside list-decimal">
						<li>
							Meningkatkan kosakata dan pemahaman konteks dengan berbagai
							permainan kata.
						</li>

						<li>
							Memperkenalkan cerita pendek yang lebih kompleks untuk
							meningkatkan pemahaman membaca.
						</li>

						<li>
							Melibatkan peserta dalam percakapan kelompok untuk memperkuat
							keterampilan berbicara.
						</li>

						<li>
							Mendorong penulisan kreatif melalui kegiatan menulis cerita pendek
							atau surat sederhana.
						</li>

						<li>
							Memperkenalkan lagu-lagu berbahasa Inggris untuk meningkatkan
							keterampilan mendengarkan.
						</li>
					</ol>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">EFC 6</h5>

					<p>
						Kursus ini ditujukan untuk siswa kelas 6 Sekolah Dasar di Indonesia,
						yang bertujuan memberikan tantangan tambahan dalam memahami dan
						menggunakan bahasa Inggris. Selama 30 pertemuan, peserta belajar
						akan terlibat dalam kegiatan diskusi, proyek kolaboratif, dan
						penggunaan sumber daya berbahasa Inggris untuk memperkaya pengalaman
						pembelajaran.
					</p>

					<p class="my-4">Tujuan Pembelajaran:</p>

					<ol class="list-inside list-decimal">
						<li>
							Mengembangkan kemampuan membaca melalui cerita, artikel, dan bahan
							bacaan yang lebih kompleks.
						</li>

						<li>
							Meningkatkan keterampilan berbicara melalui presentasi singkat dan
							diskusi kelompok.
						</li>

						<li>
							Mendorong penulisan ekspositori melalui tugas menulis esai
							sederhana.
						</li>

						<li>
							Memperdalam pemahaman mendengarkan melalui materi audio berbahasa
							Inggris yang lebih kompleks.
						</li>

						<li>
							Memotivasi eksplorasi lebih lanjut terhadap budaya berbahasa
							Inggris melalui proyek kolaboratif.
						</li>
					</ol>
				</div>
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-2">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Kelas Reguler
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Dasar (Basic): Pengenalan Komunikasi Bahasa Inggris Dasar
						(A1).
					</h5>

					<p>
						Kelas ini dirancang untuk pemula yang memiliki sedikit atau tanpa
						pengetahuan bahasa Inggris sebelumnya. Kelas ini bertujuan untuk
						membantu peserta belajar mengembangkan keterampilan komunikasi dasar
						dalam situasi sehari-hari. Fokus utama adalah pada dialog sederhana,
						perolehan kosakata dasar, dan latihan pengucapan untuk membangun
						dasar yang kuat dalam berbicara Bahasa Inggris.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Dasar Membaca dan Menulis (A1):
					</p>

					<p>
						Bertujuan untuk memperkenalkan keterampilan membaca dan menulis
						dasar, kursus ini mencakup teks pendek, latihan pemahaman bacaan
						dasar, dan tugas menulis awal. Tujuannya adalah memastikan peserta
						belajar memahami dasar-dasar melek huruf pada tingkat pemula.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Keterampilan Mendengarkan dan Berbicara Dasar (A1):
					</p>

					<p>
						Bertujuan untuk meningkatkan keterampilan mendengarkan dan berbicara
						pada tingkat pemula. Materi melibatkan materi audio dengan
						pengucapan yang jelas, percakapan dasar, dan kegiatan berbicara
						untuk situasi komunikasi praktis.
					</p>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Menengah (Elementary): Bahasa Inggris Percakapan untuk
						Pembelajar Menengah (A2):
					</h5>

					<p>
						Kelas ini cocok untuk pelajar dengan pemahaman dasar bahasa Inggris,
						untuk memperluas kosa kata dan mengenal struktur kalimat yang lebih
						kompleks. Kelas ini difokuskan pada meningkatkan keterampilan
						percakapan dalam situasi rutin, kursus ini mencakup dialog, peran,
						dan perluasan kosakata. Peserta diajak untuk berpartisipasi dalam
						berbagai kegiatan interaktif untuk membangun kepercayaan diri dalam
						berbicara Bahasa Inggris.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Pemahaman Bacaan pada Tingkat Menengah (A2):
					</p>

					<p>
						Bertujuan untuk meningkatkan keterampilan mendengarkan dan berbicara
						pada tingkat pemula. Materi melibatkan materi audio dengan
						pengucapan yang jelas, percakapan dasar, dan kegiatan berbicara
						untuk situasi komunikasi praktis.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Menulis untuk Tingkat Menengah (A2):
					</p>

					<p>
						Memperkuat keterampilan menulis dasar adalah tujuan dari kursus ini.
						Melalui tugas menulis terpandu, rangsangan kreatif, dan latihan
						dasar tata bahasa, peserta belajar mengembangkan kemampuan untuk
						mengungkapkan diri melalui paragraf pendek dan narasi sederhana.
					</p>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Pre-Intermediate: Komunikasi Praktis dalam Situasi Sehari-hari
						(B1):
					</h5>

					<p>
						Kelas ini ditujukan untuk pembelajar yang dapat mengekspresikan
						dirinya dalam situasi yang familiar. Aktifitas kelas dibangun
						berdasarkan pengetahuan yang ada, dengan fokus pada kosakata dan
						tata bahasa yang lebih beragam. Kelas ini berfokus pada peningkatan
						keterampilan komunikasi dalam berbagai situasi kehidupan nyata.
						Peran-peran, dialog situasional, dan kosakata untuk konteks tertentu
						digunakan untuk mempersiapkan peserta belajar untuk penggunaan
						bahasa yang praktis.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Strategi Membaca untuk Pembelajar Pra-Intermediate (B1):
					</p>

					<p>
						Dirancang untuk mengembangkan strategi membaca yang efektif untuk
						teks yang lebih panjang, kursus ini mencakup artikel, cerita pendek,
						dan latihan pemahaman. Tujuannya adalah meningkatkan kemahiran
						membaca secara keseluruhan pada tingkat pra-intermediate.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Keterampilan Menulis Menengah (B1):
					</p>

					<p>
						Kelas ini bertujuan untuk memperkuat keterampilan menulis menengah
						melalui esai terstruktur dan laporan. Prompt menulis, tugas esai,
						dan kegiatan peer review berkontribusi pada peningkatan kemahiran
						menulis.
					</p>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Menengah (Intermediate): Percakapan Lancar dalam Bahasa
						Inggris Menengah (B2):
					</h5>

					<p>
						Kelas ini dirancang untuk pelajar yang menguasai bahasa Inggris
						dasar dengan baik untuk mencapai kelancaran dalam percakapan tentang
						berbagai topik. Karenanya, kelas ini mengintegrasikan debat,
						diskusi, konten multimedia, dan kosakata tingkat lanjut. Fokus utama
						adalah menyempurnakan keterampilan berbicara untuk komunikasi yang
						efektif.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Pemahaman dan Analisis Kritis (B2):
					</p>

					<p>
						Kelas ini didedikasikan untuk mengembangkan keterampilan membaca
						kritis untuk materi yang lebih kompleks. Artikel otentik, esai, dan
						latihan membaca analitis menantang peserta belajar untuk terlibat
						dengan konten yang lebih maju.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Menulis Bisnis Menengah (B2):
					</p>

					<p>
						Memperkenalkan jenis tulisan teks yang lebih bervariasi, seperti
						teks bisnis dan korespondensi. Kelas ini menggunakan email bisnis,
						laporan, dan skenario komunikasi profesional untuk meningkatkan
						kemahiran menulis dalam konteks profesional.
					</p>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Menengah Atas (Upper intermediate): Keterampilan Berbicara
						Tingkat Lanjut (C1):
					</h5>

					<p>
						Kelas ini ditujukan untuk pelajar dengan dasar yang kuat dalam
						bahasa Inggris, dan berfokus pada tata bahasa tingkat lanjut,
						kosakata yang berbeda, dan struktur kalimat yang kompleks. Dengan
						fokus pada penyempurnaan keterampilan berbicara untuk diskusi yang
						lebih halus, kelas ini mencakup dialog kompleks, debat, dan topik
						percakapan tingkat lanjut untuk pembelajar tingkat menengah atas.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Analisis Sastra dan Menulis Kreatif (C1):
					</p>

					<p>
						Untuk memupuk analisis sastra dan kreativitas dalam menulis, kelas
						ini mencakup teks sastra, rangsangan menulis kreatif, dan latihan
						menulis tingkat lanjut. Peserta belajar mengeksplorasi aspek yang
						lebih rumit dari bahasa Inggris melalui sastra.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Menulis Profesional dan Komunikasi (C1):
					</p>

					<p>
						Level ini dirancang untuk mengembangkan keterampilan menulis tingkat
						lanjut untuk konteks profesional. Proposal bisnis, laporan, dan
						skenario komunikasi tempat kerja digunakan untuk meningkatkan
						kemahiran menulis dalam konteks profesional.
					</p>
				</div>

				<div class="mt-5 first:mt-0">
					<h5 class="text-lg font-semibold text-gray-800">
						Level Lanjutan (Advance): Diskusi Akademis Tingkat Lanjut (C2):
					</h5>

					<p>
						Kelas ini dirancang untuk pembicara mahir yang ingin menyempurnakan
						keterampilan bahasa mereka. Materi kelas ini ditekankan pada
						kosakata tingkat lanjut, tata bahasa yang rumit, dan ekspresi
						idiomatik. Pada tingkat ini, siswa terlibat dalam diskusi akademis
						mendalam tentang berbagai subjek. Peserta belajar menganalisis
						artikel akademis, makalah penelitian, dan berpartisipasi dalam
						diskusi bergaya seminar.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Menguasai Materi Bacaan yang Kompleks (C2):
					</p>

					<p>
						Untuk mengembangkan kemahiran membaca pada teks sastra dan akademis
						yang kompleks, level ini mengintegrasikan karya sastra tingkat
						lanjut, makalah penelitian, dan tugas membaca kritis. Peserta
						belajar berinteraksi dengan konten yang lebih canggih untuk
						meningkatkan kemahiran membaca mereka.
					</p>

					<p class="my-2 font-medium text-gray-600">
						Menulis Kreatif Tingkat Lanjut (C2):
					</p>

					<p>
						Level ini bertujuan untuk menyempurnakan keterampilan menulis
						kreatif tingkat lanjut melalui lokakarya dan kritik. Peserta belajar
						menjelajahi cerita pendek, rangsangan tingkat lanjut, dan
						berpartisipasi dalam sesi kritik bersama untuk memoles ekspresi
						kreatif mereka.
					</p>

					<p class="my-2">
						Profil ini memberikan gambaran menyeluruh tentang isi, tujuan, dan
						kegiatan yang disesuaikan dengan peserta belajar pada tingkat
						kemahiran bahasa yang berbeda sesuai dengan kerangka CEFR. Kursus
						ini secara progresif menantang dan meningkatkan kemahiran bahasa,
						memastikan pengalaman pembelajaran Bahasa Inggris yang komprehensif.
					</p>
				</div>
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-3">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Kelas Persiapan Tes Kemampuan Bahasa Inggris
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste
				commodi autem voluptatum? Molestias harum, quisquam quo provident quia
				maiores nobis! Eligendi quae culpa aliquid, quidem aperiam vero
				consequuntur ipsa.
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-4">
			<Accordion.Trigger class="text-xl font-semibold text-blue-900">
				Kelas/Kursus Bahasa Mandarin
			</Accordion.Trigger>

			<Accordion.Content class="text-lg text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
				fugiat, laboriosam ratione error dicta illum quibusdam aliquid iste
				reprehenderit dolorum voluptatum aliquam facilis, architecto dolores
				sapiente expedita voluptatem voluptate voluptas.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</section>

<section class="mt-24"></section>
