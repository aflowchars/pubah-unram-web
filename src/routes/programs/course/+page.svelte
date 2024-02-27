<script>
	import { SeoHead } from '$lib/components/base';
	import HeroPrograms from '../hero-programs.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import NavigationPages from '../navigation-pages.svelte';

	export let data;
</script>

<SeoHead title="Program Kursus" />

<HeroPrograms data={data.hero} />

<div class="container mx-auto mt-8 max-w-screen-lg px-5 md:mt-10 md:px-10">
	<article class="content_wrap">
		<section>
			<h3>Kursus Bahasa Asing</h3>

			<p>
				Layanan kursus bahasa asing di UPA Bahasa Universitas Mataram
				menyediakan pelayanan kursus bahasa Inggris dan bahasa Mandarin. Untuk
				pelayanan kursus Bahasa Inggris, ditawarkan beberapa jenis kelas bahasa
				dengan level atau tingkatan yang bervariasi. Adapun jenis-jenis kelas
				bahasa Inggris yang ditawarkan meliputi:
			</p>
		</section>

		<Accordion.Root class="mt-5 w-full">
			<Accordion.Item value="item-1">
				<Accordion.Trigger
					class="text-left text-xl font-semibold text-blue-900"
				>
					English for Children (EFC)
				</Accordion.Trigger>

				<Accordion.Content class="space-y-5 text-lg text-gray-600">
					<div class="mt-5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">EFC 4</h5>

						<p>
							Kelas ini dirancang khusus untuk anak-anak di kelas 4 Sekolah
							Dasar di Indonesia, dengan fokus pada pengenalan bahasa Inggris
							melalui pendekatan yang menyenangkan dan interaktif. Dalam 30
							pertemuan ini, anak-anak akan dibimbing untuk mengembangkan
							keterampilan mendengarkan, berbicara, membaca, dan menulis. Materi
							pembelajaran mencakup kosakata sehari-hari, frasa sederhana, dan
							aktivitas berbasis permainan untuk memotivasi partisipasi aktif.
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
								Mendorong penulisan kreatif melalui kegiatan menulis cerita
								pendek atau surat sederhana.
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
							Inggris melalui berbagai kegiatan yang menarik. Selama 30
							pertemuan, peserta belajar akan terlibat dalam kegiatan interaktif
							untuk memperkaya kosakata, meningkatkan keterampilan membaca, dan
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
								Mendorong penulisan kreatif melalui kegiatan menulis cerita
								pendek atau surat sederhana.
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
							Kursus ini ditujukan untuk siswa kelas 6 Sekolah Dasar di
							Indonesia, yang bertujuan memberikan tantangan tambahan dalam
							memahami dan menggunakan bahasa Inggris. Selama 30 pertemuan,
							peserta belajar akan terlibat dalam kegiatan diskusi, proyek
							kolaboratif, dan penggunaan sumber daya berbahasa Inggris untuk
							memperkaya pengalaman pembelajaran.
						</p>

						<p class="my-4">Tujuan Pembelajaran:</p>

						<ol class="list-inside list-decimal">
							<li>
								Mengembangkan kemampuan membaca melalui cerita, artikel, dan
								bahan bacaan yang lebih kompleks.
							</li>

							<li>
								Meningkatkan keterampilan berbicara melalui presentasi singkat
								dan diskusi kelompok.
							</li>

							<li>
								Mendorong penulisan ekspositori melalui tugas menulis esai
								sederhana.
							</li>

							<li>
								Memperdalam pemahaman mendengarkan melalui materi audio
								berbahasa Inggris yang lebih kompleks.
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
				<Accordion.Trigger
					class="text-left text-xl font-semibold text-blue-900"
				>
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
							membantu peserta belajar mengembangkan keterampilan komunikasi
							dasar dalam situasi sehari-hari. Fokus utama adalah pada dialog
							sederhana, perolehan kosakata dasar, dan latihan pengucapan untuk
							membangun dasar yang kuat dalam berbicara Bahasa Inggris.
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
							Bertujuan untuk meningkatkan keterampilan mendengarkan dan
							berbicara pada tingkat pemula. Materi melibatkan materi audio
							dengan pengucapan yang jelas, percakapan dasar, dan kegiatan
							berbicara untuk situasi komunikasi praktis.
						</p>
					</div>

					<div class="mt-5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							Level Menengah (Elementary): Bahasa Inggris Percakapan untuk
							Pembelajar Menengah (A2):
						</h5>

						<p>
							Kelas ini cocok untuk pelajar dengan pemahaman dasar bahasa
							Inggris, untuk memperluas kosa kata dan mengenal struktur kalimat
							yang lebih kompleks. Kelas ini difokuskan pada meningkatkan
							keterampilan percakapan dalam situasi rutin, kursus ini mencakup
							dialog, peran, dan perluasan kosakata. Peserta diajak untuk
							berpartisipasi dalam berbagai kegiatan interaktif untuk membangun
							kepercayaan diri dalam berbicara Bahasa Inggris.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Pemahaman Bacaan pada Tingkat Menengah (A2):
						</p>

						<p>
							Bertujuan untuk meningkatkan keterampilan mendengarkan dan
							berbicara pada tingkat pemula. Materi melibatkan materi audio
							dengan pengucapan yang jelas, percakapan dasar, dan kegiatan
							berbicara untuk situasi komunikasi praktis.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Menulis untuk Tingkat Menengah (A2):
						</p>

						<p>
							Memperkuat keterampilan menulis dasar adalah tujuan dari kursus
							ini. Melalui tugas menulis terpandu, rangsangan kreatif, dan
							latihan dasar tata bahasa, peserta belajar mengembangkan kemampuan
							untuk mengungkapkan diri melalui paragraf pendek dan narasi
							sederhana.
						</p>
					</div>

					<div class="mt-5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							Level Pre-Intermediate: Komunikasi Praktis dalam Situasi
							Sehari-hari (B1):
						</h5>

						<p>
							Kelas ini ditujukan untuk pembelajar yang dapat mengekspresikan
							dirinya dalam situasi yang familiar. Aktifitas kelas dibangun
							berdasarkan pengetahuan yang ada, dengan fokus pada kosakata dan
							tata bahasa yang lebih beragam. Kelas ini berfokus pada
							peningkatan keterampilan komunikasi dalam berbagai situasi
							kehidupan nyata. Peran-peran, dialog situasional, dan kosakata
							untuk konteks tertentu digunakan untuk mempersiapkan peserta
							belajar untuk penggunaan bahasa yang praktis.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Strategi Membaca untuk Pembelajar Pra-Intermediate (B1):
						</p>

						<p>
							Dirancang untuk mengembangkan strategi membaca yang efektif untuk
							teks yang lebih panjang, kursus ini mencakup artikel, cerita
							pendek, dan latihan pemahaman. Tujuannya adalah meningkatkan
							kemahiran membaca secara keseluruhan pada tingkat
							pra-intermediate.
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
							dasar dengan baik untuk mencapai kelancaran dalam percakapan
							tentang berbagai topik. Karenanya, kelas ini mengintegrasikan
							debat, diskusi, konten multimedia, dan kosakata tingkat lanjut.
							Fokus utama adalah menyempurnakan keterampilan berbicara untuk
							komunikasi yang efektif.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Pemahaman dan Analisis Kritis (B2):
						</p>

						<p>
							Kelas ini didedikasikan untuk mengembangkan keterampilan membaca
							kritis untuk materi yang lebih kompleks. Artikel otentik, esai,
							dan latihan membaca analitis menantang peserta belajar untuk
							terlibat dengan konten yang lebih maju.
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
							Level ini dirancang untuk mengembangkan keterampilan menulis
							tingkat lanjut untuk konteks profesional. Proposal bisnis,
							laporan, dan skenario komunikasi tempat kerja digunakan untuk
							meningkatkan kemahiran menulis dalam konteks profesional.
						</p>
					</div>

					<div class="mt-5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							Level Lanjutan (Advance): Diskusi Akademis Tingkat Lanjut (C2):
						</h5>

						<p>
							Kelas ini dirancang untuk pembicara mahir yang ingin
							menyempurnakan keterampilan bahasa mereka. Materi kelas ini
							ditekankan pada kosakata tingkat lanjut, tata bahasa yang rumit,
							dan ekspresi idiomatik. Pada tingkat ini, siswa terlibat dalam
							diskusi akademis mendalam tentang berbagai subjek. Peserta belajar
							menganalisis artikel akademis, makalah penelitian, dan
							berpartisipasi dalam diskusi bergaya seminar.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Menguasai Materi Bacaan yang Kompleks (C2):
						</p>

						<p>
							Untuk mengembangkan kemahiran membaca pada teks sastra dan
							akademis yang kompleks, level ini mengintegrasikan karya sastra
							tingkat lanjut, makalah penelitian, dan tugas membaca kritis.
							Peserta belajar berinteraksi dengan konten yang lebih canggih
							untuk meningkatkan kemahiran membaca mereka.
						</p>

						<p class="my-2 font-medium text-gray-600">
							Menulis Kreatif Tingkat Lanjut (C2):
						</p>

						<p>
							Level ini bertujuan untuk menyempurnakan keterampilan menulis
							kreatif tingkat lanjut melalui lokakarya dan kritik. Peserta
							belajar menjelajahi cerita pendek, rangsangan tingkat lanjut, dan
							berpartisipasi dalam sesi kritik bersama untuk memoles ekspresi
							kreatif mereka.
						</p>

						<p class="my-2">
							Profil ini memberikan gambaran menyeluruh tentang isi, tujuan, dan
							kegiatan yang disesuaikan dengan peserta belajar pada tingkat
							kemahiran bahasa yang berbeda sesuai dengan kerangka CEFR. Kursus
							ini secara progresif menantang dan meningkatkan kemahiran bahasa,
							memastikan pengalaman pembelajaran Bahasa Inggris yang
							komprehensif.
						</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-3">
				<Accordion.Trigger
					class="text-left text-xl font-semibold text-blue-900"
				>
					Kelas Persiapan Tes Kemampuan Bahasa Inggris
				</Accordion.Trigger>

				<Accordion.Content class="text-lg text-gray-600">
					<div class="mt-5 space-y-2.5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							Introductory to Academic English
						</h5>

						<p>
							Kelas Pengantar Bahasa Inggris Akademik dirancang untuk siswa yang
							mendapat nilai 400 atau lebih rendah pada tes TOEFL. Kelas ini
							bertujuan untuk membekali siswa dengan dasar yang kuat dalam
							bahasa Inggris akademis, memungkinkan mereka untuk membiasakan
							diri dengan keterampilan dan konvensi bahasa yang diperlukan untuk
							lingkungan akademik dan kegiatan akademis di masa depan.
						</p>

						<p>
							Pada kelas ini, siswa akan terlibat dalam berbagai aktivitas dan
							latihan yang berfokus pada pengembangan keterampilan dasar bahasa
							Inggris akademis. Penekanannya akan ditempatkan pada peningkatan
							pemahaman membaca, keterampilan menulis, pemahaman mendengarkan,
							dan kemampuan berbicara dalam konteks akademik. Selain itu, siswa
							akan diperkenalkan dengan kosakata akademik utama dan konvensi
							penulisan akademik dasar.
						</p>

						<p>
							Untuk pemahaman membaca, Siswa akan berlatih membaca teks akademik
							pada tingkat pemula, secara bertahap meningkatkan keterampilan
							pemahaman mereka. Siswa akan mempelajari strategi membaca yang
							penting, seperti mengidentifikasi gagasan utama, memahami konteks,
							dan mengenali detail pendukung.
						</p>
						<p>
							Untuk keterampilan Menulis Dasar: Kursus ini akan memperkenalkan
							siswa pada dasar-dasar penulisan akademik, termasuk struktur
							kalimat, pengembangan paragraf, dan penggunaan tata bahasa dasar.
							Siswa akan belajar mengungkapkan ide-ide mereka dengan jelas dan
							koheren dalam tugas menulis akademik sederhana.
						</p>
						<p>
							Untuk pemahaman Mendengarkan: Siswa akan meningkatkan keterampilan
							mendengarkan mereka dengan terlibat dengan materi akademik,
							seperti rekaman ceramah dan diskusi akademis singkat. Siswa akan
							berlatih memahami gagasan utama, mengikuti arahan, dan mengenali
							kosakata akademis umum.
						</p>
						<p>
							Untuk keterampilan Berbicara dan Presentasi: Siswa akan
							mengembangkan keterampilan berbicara dasar yang diperlukan untuk
							komunikasi akademik. Siswa akan berlatih berpartisipasi dalam
							diskusi akademis sederhana, memberikan presentasi singkat, dan
							mengungkapkan ide-idenya dengan jelas dan percaya diri.
						</p>

						<p>
							Untuk Kosakata Akademik: Siswa akan diperkenalkan dengan kosakata
							akademik penting yang berkaitan dengan berbagai disiplin ilmu.
							Siswa akan mempelajari istilah akademis umum, ekspresi idiomatik,
							dan terminologi khusus untuk konteks akademis.
						</p>

						<p>
							Pada akhir kelas Pengantar Bahasa Inggris Akademik, siswa akan
							memiliki dasar keterampilan bahasa Inggris akademik yang
							diperlukan untuk studi akademis lebih lanjut. Siswa akan
							meningkatkan kemampuan membaca, menulis, mendengarkan, dan
							berbicara dalam konteks akademik, dan memperoleh keakraban dengan
							kosakata akademik dasar.
						</p>
					</div>

					<div class="mt-5 space-y-2.5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							Academic English
						</h5>

						<p>
							Kelas Bahasa Inggris Akademik dirancang khusus bagi siswa yang
							telah mencapai nilai tes TOEFL antara 401 dan 450. Kelas ini
							bertujuan untuk meningkatkan kompetensi siswa dalam bahasa Inggris
							akademik, memungkinkan mereka untuk terlibat secara efektif dalam
							lingkungan akademik dan memenuhi tuntutan bahasa di pendidikan
							tinggi. Pada kelas ini, siswa akan fokus pada pengembangan
							keterampilan bahasa penting yang diperlukan untuk keberhasilan
							akademik. Penekanannya akan ditempatkan pada peningkatan pemahaman
							membaca, kemahiran menulis, pemahaman mendengarkan, dan
							keterampilan berbicara dalam konteks akademik. Siswa juga akan
							mengembangkan pemikiran kritis dan keterampilan analitis yang
							diperlukan untuk tugas dan tugas akademik.
						</p>

						<p>
							Untuk Membaca dan Pengembangan Kosakata: Siswa akan terlibat
							dengan berbagai teks akademis, termasuk artikel, makalah
							penelitian, dan materi ilmiah. Siswa akan meningkatkan
							keterampilan pemahaman bacaan mereka, memperluas kosakata akademis
							mereka, dan mempelajari strategi efektif untuk memahami dan
							mengekstraksi informasi dari teks yang kompleks.
						</p>

						<p>
							Untuk Keterampilan Menulis dan Gaya Akademik: Kursus ini akan
							membimbing siswa melalui proses penulisan akademis, termasuk
							komposisi esai, pengembangan makalah penelitian, dan konvensi
							penulisan formal. Siswa akan belajar menyusun struktur tulisan
							mereka secara efektif, mengembangkan argumen yang kohesif, dan
							menyempurnakan penggunaan tata bahasa dan kosa kata untuk memenuhi
							standar penulisan akademis.
						</p>

						<p>
							Untuk Pemahaman Mendengarkan: Siswa akan meningkatkan keterampilan
							mendengarkan mereka dengan terlibat dalam ceramah akademik
							otentik, presentasi, dan diskusi. Siswa akan mempraktikkan teknik
							mendengarkan aktif, dan strategi mencatat, serta mengembangkan
							kemampuan mereka untuk memahami dan mengikuti wacana akademik yang
							kompleks.
						</p>

						<p>
							Untuk Keterampilan Berbicara dan Presentasi: Siswa akan
							meningkatkan kemampuan mereka untuk mengekspresikan diri dengan
							percaya diri dan efektif dalam lingkungan akademik. Siswa akan
							berlatih diskusi akademis, terlibat dalam proyek kelompok, dan
							menyampaikan presentasi tentang topik akademik. Perhatian khusus
							akan diberikan untuk meningkatkan pengucapan, kelancaran, dan
							daftar akademik.
						</p>

						<p>
							Untuk Keterampilan Akademik dan Berpikir Kritis: Kursus ini akan
							fokus pada pengembangan keterampilan akademik yang penting,
							seperti parafrase, merangkum, dan mensintesis informasi dari
							berbagai sumber. Siswa juga akan meningkatkan kemampuan berpikir
							kritisnya dengan menganalisis dan mengevaluasi teks akademik,
							terlibat dalam perdebatan, dan merumuskan argumen berbasis bukti.
						</p>

						<p>
							Pada akhir kelas Bahasa Inggris Akademik, siswa akan meningkatkan
							kompetensi mereka dalam Bahasa Inggris Akademik secara signifikan.
							Siswa akan memperoleh keterampilan yang diperlukan untuk memahami
							dan menganalisis teks akademik, mengekspresikan diri mereka dengan
							lancar dan koheren baik dalam bentuk lisan maupun tulisan, dan
							terlibat dalam diskusi dan presentasi akademik dengan percaya
							diri.
						</p>
					</div>

					<div class="mt-5 space-y-2.5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							IELTS Preparation 1
						</h5>

						<p>
							Kelas Persiapan IELTS 1 dirancang khusus untuk siswa yang telah
							mencapai skor tes TOEFL antara 450 dan 500 atau memiliki skor
							IELTS setara sekitar 4,5. Tujuan utama dari kelas ini adalah untuk
							membekali siswa dengan keterampilan dan strategi yang diperlukan
							untuk mencapai skor band 5,5 pada ujian International English
							Language Testing System (IELTS). Pada kelas ini, siswa akan
							terlibat dalam berbagai aktivitas dan latihan yang disesuaikan
							untuk meningkatkan kemahiran mereka dalam keempat komponen tes
							IELTS: mendengarkan, membaca, menulis, dan berbicara. Penekanannya
							akan ditempatkan pada pengembangan keterampilan bahasa yang
							penting, strategi pengambilan tes, dan teknik manajemen waktu.
						</p>

						<p>
							Dalam membangun Keterampilan Mendengarkan: Siswa akan meningkatkan
							keterampilan pemahaman mendengarkan mereka melalui latihan
							ekstensif dengan berbagai materi audio, termasuk percakapan,
							ceramah, dan wawancara. Siswa akan mempelajari teknik pencatatan
							yang efektif, mengembangkan kemampuan mereka untuk
							mengidentifikasi informasi penting, dan meningkatkan pemahaman
							mereka secara keseluruhan tentang bahasa Inggris lisan.
						</p>

						<p>
							Dalam meningkatkan Kemampuan Membaca: Kursus ini akan fokus pada
							penguatan keterampilan pemahaman membaca siswa dengan memaparkan
							mereka pada berbagai bagian bacaan otentik. Melalui latihan dan
							diskusi yang dipandu, siswa akan mempelajari strategi membaca yang
							efektif, seperti skimming, scanning, dan mengidentifikasi ide-ide
							utama, rincian pendukung, dan makna yang disimpulkan.
						</p>

						<p>
							Dalam mengembangkan Kemahiran Menulis: Siswa akan mengembangkan
							keterampilan menulisnya dengan mempraktikkan berbagai jenis tugas
							menulis yang biasa ditemukan dalam ujian IELTS. Siswa akan belajar
							bagaimana menyusun esai secara efektif, mengekspresikan ide-ide
							mereka secara koheren, dan menggunakan kosakata dan tata bahasa
							yang sesuai. Selain itu, siswa akan menerima umpan balik yang
							konstruktif untuk meningkatkan kemampuan menulis mereka.
						</p>

						<p>
							Dalam meningkatkan Kefasihan Berbicara: Kursus ini akan memberi
							siswa banyak kesempatan untuk berlatih dan menyempurnakan
							keterampilan berbicara mereka. Melalui terlibat dalam diskusi
							kelompok, memberikan presentasi, dan berpartisipasi dalam tes
							berbicara tiruan, siswa akan mengembangkan kepercayaan diri dalam
							mengungkapkan pikiran dan pendapat mereka dengan lancar dan
							akurat. Siswa juga akan menerima umpan balik tentang pengucapan,
							intonasi, dan keakuratan tata bahasa.
						</p>

						<p>
							Pada kelas ini, siswa juga akan mempelajari strategi penting dalam
							mengambil tes khusus untuk ujian IELTS. Siswa akan terbiasa dengan
							format dan persyaratan setiap bagian, memahami kriteria penilaian,
							dan mempraktikkan teknik manajemen waktu yang efektif untuk
							mengoptimalkan kinerja mereka selama ujian. Pada akhir Kelas
							Persiapan IELTS 1, siswa akan memperoleh keterampilan dan
							kepercayaan diri yang diperlukan untuk mencapai skor band 5,5 pada
							ujian IELTS. Siswa akan meningkatkan kemahiran bahasa Inggris
							mereka secara keseluruhan dan siap untuk maju ke tingkat persiapan
							IELTS berikutnya atau mengejar tujuan akademik dan profesional
							mereka yang membutuhkan tingkat kemahiran bahasa Inggris yang
							lebih tinggi.
						</p>
					</div>

					<div class="mt-5 space-y-2.5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							IELTS Preparation 2
						</h5>

						<p>
							Kelas Persiapan IELTS 2 dirancang khusus untuk siswa yang telah
							mencapai skor tes TOEFL antara 501 dan 550 atau memiliki skor
							IELTS setara sekitar 5,5. Kursus ini bertujuan untuk membekali
							siswa dengan keterampilan dan strategi yang diperlukan untuk
							mencapai skor band 6,5 pada ujian International English Language
							Testing System (IELTS).
						</p>

						<p>
							Sepanjang kursus intensif ini, siswa akan terlibat dalam aktivitas
							dan latihan yang ditargetkan yang dirancang untuk meningkatkan
							kemahiran mereka dalam keempat komponen tes IELTS: mendengarkan,
							membaca, menulis, dan berbicara. Kelas ini akan fokus pada
							pengembangan lebih lanjut keterampilan bahasa, menyempurnakan
							strategi pengambilan tes, dan meningkatkan kelancaran dan akurasi
							secara keseluruhan.
						</p>

						<p>
							Untuk Pemahaman Mendengarkan Tingkat Lanjut: Siswa akan
							menyempurnakan keterampilan mendengarkan mereka melalui paparan
							ekstensif terhadap berbagai materi audio otentik, seperti ceramah,
							wawancara, dan diskusi. Siswa akan berlatih mengidentifikasi
							informasi spesifik, membuat kesimpulan, dan memahami ide-ide
							kompleks. Selain itu, siswa akan berupaya mempertajam kemampuan
							mencatat dan meningkatkan akurasi dan kecepatan mendengarkan
							secara keseluruhan.
						</p>

						<p>
							Untuk Keterampilan Membaca Kritis: Kursus ini akan berkonsentrasi
							pada peningkatan keterampilan pemahaman membaca siswa dengan
							melibatkan teks akademis yang menantang. Siswa akan mempelajari
							teknik membaca tingkat lanjut, termasuk menganalisis argumen yang
							kompleks, mengidentifikasi makna tersirat, dan mensintesis
							informasi dari berbagai sumber. Penekanan juga akan diberikan pada
							perluasan kosa kata dan pemahaman penggunaan bahasa yang berbeda.
						</p>

						<p>
							Untuk Teknik Menulis Tingkat Lanjut: Siswa akan lebih
							mengembangkan kemampuan menulis mereka dengan terlibat dalam
							serangkaian tugas menulis yang mencerminkan tugas-tugas yang
							ditemukan dalam ujian IELTS. Siswa akan belajar bagaimana menulis
							esai yang koheren dan terstruktur dengan baik dengan kosakata
							tingkat lanjut, penggunaan tata bahasa yang tepat, dan argumentasi
							yang efektif. Siswa juga akan menerima umpan balik yang
							dipersonalisasi untuk menyempurnakan keterampilan menulis mereka
							dan mengatasi area peningkatan tertentu.
						</p>

						<p>
							Untuk Berbicara Lancar dan Koheren: Kelas ini akan memberikan
							banyak kesempatan bagi siswa untuk meningkatkan kefasihan,
							koherensi, dan akurasi berbicara mereka. Melalui kegiatan
							interaktif, diskusi, dan presentasi, siswa akan menyempurnakan
							kemampuan mereka untuk mengungkapkan ide dengan jelas, mendukung
							argumen, dan terlibat dalam percakapan yang panjang. Pengucapan
							dan intonasi juga akan ditekankan untuk menjamin komunikasi yang
							efektif.
						</p>

						<p>
							Strategi Tes Tingkat Lanjut: Siswa akan memperoleh strategi
							pengambilan tes tingkat lanjut yang secara khusus disesuaikan
							dengan ujian IELTS. Siswa akan memahami seluk-beluk setiap bagian
							tes, mendapatkan wawasan tentang kriteria penilaian, dan
							mempraktikkan teknik manajemen waktu untuk mengoptimalkan kinerja
							mereka. Tes tiruan dan latihan yang ditargetkan akan
							mensimulasikan kondisi ujian nyata dan memberikan umpan balik yang
							berharga untuk perbaikan.
						</p>

						<p>
							Pada akhir Persiapan IELTS 2, siswa akan memperoleh keterampilan
							dan kepercayaan diri yang diperlukan untuk mencapai skor band 6,5
							pada ujian IELTS. Siswa akan menunjukkan kemahiran dalam memahami
							materi akademik yang kompleks, mengekspresikan diri dengan lancar
							dan akurat, dan menerapkan strategi yang efektif untuk unggul
							dalam format tes.
						</p>
					</div>

					<div class="mt-5 space-y-2.5 first:mt-0">
						<h5 class="text-lg font-semibold text-gray-800">
							IELTS Prepaparation 3
						</h5>

						<p>
							Kelas Persiapan IELTS 3 dirancang khusus untuk siswa yang telah
							mencapai skor tes TOEFL antara 551 dan 600 atau memiliki skor
							IELTS setara sekitar 6,5. Kursus ini bertujuan untuk membekali
							siswa dengan keterampilan dan strategi yang diperlukan untuk
							mencapai skor band 7 pada ujian International English Language
							Testing System (IELTS).
						</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-4">
				<Accordion.Trigger
					class="text-left text-xl font-semibold text-blue-900"
				>
					Kelas/Kursus Bahasa Mandarin
				</Accordion.Trigger>

				<Accordion.Content class="text-lg text-gray-600">
					<div class="mt-5 space-y-2.5 first:mt-0">
						<p>
							Dewasa ini, China diprediksi akan menjadi salah satu kekuatan
							penting tata baru perekonomian dunia. Pengaruhnya di Kawasan Asia,
							secara langsung atau tidak langsung, akan berdampak terhadap
							perekonomian Indonesia. Hubungan diplomatik dan dinamika
							perdagangan Indonesia-China, memiliki arti penting bagi masyarakat
							Asia. China dengan kekuatan ekonomi, keunikan bahasa dan
							budayanya, dipandang perlu untuk dipelajari.
						</p>

						<p>
							Unit Pengelola Akademik Bahasa (UPA Bahasa) di Universitas Mataram
							menyediakan layanan kursus Bahasa Mandarin tingkat dasar yang
							bertujuan untuk memberikan akses dan mendukung pengembangan
							keterampilan berbahasa Mandarin sebagai bahasa kedua bagi
							mahasiswa dan masyarakat umum. Sasaran dari pelayanan ini adalah
							mahasiswa dan masyaraat umum yang ingin memulai atau meningkatkan
							kemampuan berbahasa Mandarin untuk keperluan pribadi atau
							profesional.
						</p>

						<p>
							Program ini diperuntukkan bagi pemula dengan pengenalan huruf
							pinyin, hanzi, angka serta greeting. Materi pembelajaran meliputi;
							Mandarin for Daily Life. Pemahaman dan penggunaan Bahasa Mandarin
							dalam kehidupan sehari-hari dan mengekspresikan perasaan.
							Pengenalan huruf pinyin dan cara penulisan huruf hanzi sehingga
							siswa dapat membuat kalimat, dengan menggunakan komputer dan alat
							komunikasi lain seperti Mobile Phone . Siswa juga diharapkan dapat
							memahami “basic phones and tones”, mampu berbicara, menulis dan
							membaca dalam aktivitas sehari-hari.
						</p>

						<p>
							Struktur kurikulum bahasa Mandarin dikembangkan berdasarkan
							keperluan peserta kursus dengan mempertimbangkan level kemampuan
							yang dimiliki. Model pembelajaran yang dikembangkan dalam program
							ini dengan model active learning dengan mengedepankan drill atas
							empat kemahiran yaitu kemahiran membaca, berbicara, menulis dan
							mendengarkan.
						</p>

						<p>
							Registrasi administratif kelas bahasa Mandarin dilaksanakan oleh
							bagian administrasi UPA Bahasa, dan registrasi dilaksanakan dalam
							tiga periode dalam setahun, yang dapat dilakukan secara online
							melalui laman pubah.unram.ac.id dengan ketentuan dan prosedur
							seperti yang tercantum pada pelaksanaan kegiatan UPA Bahasa.
						</p>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</article>
</div>

<NavigationPages datas={data.nav_page} />
