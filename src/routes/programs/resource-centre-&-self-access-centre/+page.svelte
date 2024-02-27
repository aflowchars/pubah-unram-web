<script>
	import { SeoHead } from '$lib/components/base';
	import HeroPrograms from '../hero-programs.svelte';

	export let data;
</script>

<SeoHead title="Pusat Pembelajaran Mandiri" />

<HeroPrograms data={data.hero} />

<section
	class="mx-auto mt-10 max-w-screen-lg space-y-10 px-10 text-justify text-lg leading-loose text-gray-600"
>
	<section class="flex flex-col items-start gap-2.5">
		<h3 class="text-2xl font-semibold text-gray-950">Tentang Program</h3>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">1. Resosurce Centre</h4>

			<p>
				Pusat Sumber Daya terletak di salah satu ruangan di Ruang Staf. RC ini
				terdiri dari koleksi referensi dan kaset untuk pengajaran bahasa Inggris
				serta koleksi untuk pengajaran bahasa Indonesia kepada orang asing. Saat
				ini, jumlah total judul buku di RC adalah sekitar 1000 judul (sekitar
				2000 eksemplar), dan jumlah ini akan terus bertambah seiring dengan
				perkembangan Pusat Bahasa UNRAM. Sebagian besar koleksi ini merupakan
				sumbangan dari Unit Pelaksana Proyek Lokal – Indonesian-Australian
				Eastern Universities Project (LPIU-IAEUP) dan Proyek Pengembangan
				Sebelas Perguruan Tinggi (PPSLPT). Koleksi ini dibagi berdasarkan
				kategori: Reading (RE), General English Course (CB), English for
				Occupational Purposes (EOP), English for Science and Technology (EST),
				International Tests/IELTS, TOEFL dan TOEIC (IT), Grammar (GR), Listening
				(LS), Vocabulary (VO), Testing (TES), Dictation and Pronunciation (DP),
				Activities (Games & Songs) (AC), Cambridge First Certificate (CA),
				Journal (JR), Speaking (SP), Writing (WR), English for Academic Purposes
				(EAP), Teacher Training (TT), Dictionary (DC), Novel (NOV), dan Video
				(VR/VG), Bahasa Indonesia (INDO). Jumlah kaset yang tersedia saat ini
				sekitar 500 judul. Koleksi di RC adalah materi pengajaran, beberapa buku
				kosakata, dan tata bahasa (VO dan GR) untuk kursus yang berlangsung di
				Pusat Bahasa UNRAM dan tidak dipinjamkan kepada anggota SAC/mahasiswa
				kecuali untuk Teacher Training (TT) dan Journal (JL). Data tentang
				koleksi buku, kaset, dan video diarsipkan dalam "Clear Holder". Dari
				koleksi ini, beberapa buku dipilih untuk digunakan sebagai materi
				pengajaran untuk kursus bahasa Inggris (dan bahasa Indonesia) yang
				ditentukan berdasarkan tingkat. (Untuk bahan yang disarankan untuk
				setiap tingkat, lihat Lampiran untuk Rencana Pembelajaran). Buku yang
				disarankan untuk kursus individual tidak dipinjamkan baik kepada
				fakultas maupun anggota SAC.
			</p>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">2. Self-Access Centre</h4>

			<p>
				Pusat Akses Mandiri (SAC) merupakan pusat pembelajaran bahasa yang
				mandiri. SAC bertujuan untuk membantu para pembelajar bahasa Inggris di
				lingkungan UNRAM dan juga masyarakat umum agar dapat meningkatkan
				kemampuan berbahasa Inggris dengan pola pembelajaran bahasa sendiri
				(Self-Access Language Learning/SALL), di mana siswa dapat menentukan
				pola belajar mereka sendiri dengan memilih materi (lembar kerja, buku,
				kaset, video, permainan, dsb.) berdasarkan minat dan kebutuhan mereka
				serta sesuai dengan waktu dan kemampuan yang dimiliki. Dengan adanya
				SAC, diharapkan siswa dapat belajar bahasa Inggris secara mandiri dan
				efektif sesuai dengan kebutuhan dan minat pribadi mereka.
			</p>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">A. Fasilitas</h4>

			<p>
				SAC memiliki fasilitas-fasilitas berikut: Lembar kerja dan buku teks,
				lengkap dengan kunci jawaban, ditampilkan dalam rak akses mandiri.
				Lembar kerja dan buku teks ini diatur berdasarkan tingkat - dari dasar
				hingga menengah, ditandai dengan warna folder (pink untuk dasar, kuning
				untuk pra-menengah, dan hijau muda untuk menengah) dan berdasarkan aspek
				bahasa dan keterampilan (listening, reading, writing, grammar,
				vocabulary, dan pronunciation). Lagu-lagu (folder oranye), Persiapan Tes
				(TOEFL dan IELTS) (folder biru), seri English for Specific Purposes
				(ESP) (folder merah), dan Aussie English (folder biru muda) juga
				tersedia. Buku teks bahasa Inggris, referensi linguistik (TT), artikel
				jurnal, video (pelajaran bahasa Inggris dan film hiburan), novel,
				permainan, informasi studi di luar negeri, dan komputer semuanya
				tersedia. Layanan lain yang membantu termasuk kelompok diskusi,
				lokakarya, layanan masyarakat, dan konsultasi studi di luar negeri.
			</p>

			<p>
				Dua pemutar video, tiga belas pemutar kaset, dan sebuah ruangan ber-AC
				mendukung fasilitas-fasilitas tersebut. Sejak Mei 2000, SAC telah
				menambah satu ruangan lagi untuk menampung jumlah siswa yang tertarik
				yang cukup besar. Ruangan ini digunakan untuk ruang audiovisual, sudut
				berbicara, rak majalah, dan informasi studi di luar negeri.
			</p>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">B. Jam Buka</h4>

			<p>
				Saat ini, jam buka SAC dibatasi sesuai dengan jam kerja pegawai negeri
				sipil (PNS), tetapi tidak ada aturan yang melarang untuk memperpanjang
				waktu hingga sore atau bahkan larut malam, tergantung pada permintaan. <br
				/>
				Senin & Kamis 08.00 – 14.00 <br />
				Selasa & Rabu 08.00 – 18.00 <br />
				Jumat & Sabtu 08.00 – 12.00 <br />
				Minggu dan hari libur tutup
			</p>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">C. Keanggotaan</h4>

			<p>
				Pengguna diwajibkan untuk mendaftar keanggotaan untuk dapat mengakses
				fasilitas SAC selama satu tahun. Untuk mendaftar, pengguna diharuskan
				untuk:
			</p>

			<ol class="list-decimal pl-5">
				<li>Mengisi formulir</li>

				<li>Membayar biaya pendaftaran:</li>

				<li>Akademisi UNRAM IDR25.000,00/tahun</li>

				<li>Umum IDR35.000,00/tahun</li>

				<li>Dua foto ukuran paspor (2 x 3) dan fotokopi kartu identitas</li>

				<li>
					Hingga pertengahan September 2000, terdapat sekitar 390 anggota. 370
					di antaranya masih aktif.
				</li>
			</ol>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">D. Peminjaman Buku</h4>

			<p>
				Setiap anggota diizinkan untuk meminjam koleksi SAC tertentu. Jurnal,
				kosakata, tata bahasa, novel, pendidikan guru, dan bacaan adalah contoh
				buku yang dapat dipinjam. Kecuali untuk novel, yang dapat dipinjam
				selama satu minggu, periode pinjaman maksimum adalah tiga hari, dan
				hanya satu buku yang boleh dipinjam pada satu waktu. Denda untuk
				pengembalian terlambat adalah IDR 500.000 per hari, dan anggota tidak
				diizinkan untuk meminjam sampai denda telah dibayar lunas. Jika buku
				hilang, peminjam harus menggantinya dengan salinan dari buku yang sama
				atau membayar biaya buku (harga saat ini).
			</p>

			<p>
				Para guru Bahasa Inggris dalam Program Studi Bahasa Inggris diizinkan
				untuk meminjam dua buku selama periode peminjaman satu bulan. Koordinasi
				peminjaman buku-buku ini adalah tanggung jawab Koordinator SAC.
			</p>
		</div>

		<div class="block space-y-2.5 pt-5">
			<h4 class="text-xl font-semibold text-gray-800">
				E. Training of Trainers (ToT)
			</h4>

			<p>
				Melalui pelatihan, seminar, dan diskusi, program ini bertujuan untuk
				meningkatkan profesionalisme guru dan tutor Bahasa Inggris serta mata
				pelajaran lainnya. Program ini mencakup:
			</p>

			<ol class="list-decimal pl-5">
				<li>Pengembangan Profesional Guru</li>

				<li>Pelatihan Pembelajaran Bahasa Inggris</li>

				<li>Pengajaran Bahasa Inggris untuk Pembelajar Muda (TEYL)</li>

				<li>Strategi dan Model Pembelajaran Bahasa Inggris</li>

				<li>Penelitian Tindakan Kelas</li>

				<li>Desain Kurikulum</li>

				<li>Pembelajaran Pelajaran</li>

				<li>Pengembangan Media dan Pelatihan Bahan Pembelajaran</li>

				<li>Pelatihan Penerjemahan</li>
			</ol>
		</div>
	</section>
</section>

<nav class="mt-20 flex items-center justify-between bg-blue-50 px-32 py-5">
	<a href="/programs/language-test" class="flex flex-col items-start">
		<h6 class="text-xs font-semibold text-gray-500">Sebelumnya</h6>

		<p class="text-lg font-semibold text-gray-950">Language Test</p>
	</a>

	<a
		href="/programs/translation-&-interpreting"
		class="flex flex-col items-end"
	>
		<h6 class="text-xs font-semibold text-gray-500">Selanjutnya</h6>

		<p class="text-lg font-semibold text-gray-950">
			Resource Centre & Self-Access Centre
		</p>
	</a>
</nav>
