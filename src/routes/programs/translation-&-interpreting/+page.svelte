<script>
	import { SeoHead } from '$lib/components/base';
	import HeroPrograms from '../hero-programs.svelte';

	import NavigationPages from '../navigation-pages.svelte';

	export let data;
</script>

<SeoHead title="Tes Kemampuan Bahasa Asing" />

<HeroPrograms data={data.hero} />

<section
	class="mx-auto mt-20 max-w-screen-lg space-y-10 px-10 text-justify text-lg leading-loose text-gray-600"
>
	<section class="space-y-2.5">
		<h3 class="text-2xl font-semibold text-gray-950">Tentang Layanan</h3>

		<p>
			Layanan terjemahan di UPA Bahasa Universitas Mataram juga menawarkan
			berbagai jenis terjemahan, mulai dari dokumen akademis seperti skripsi dan
			tugas kuliah, hingga dokumen administratif seperti surat resmi dan
			kontrak. Tim terjemahan UPA Bahasa terdiri dari profesional terlatih yang
			tidak hanya mahir dalam bahasa, tetapi juga memiliki pemahaman mendalam
			tentang terminologi khusus dalam berbagai bidang, seperti ilmu
			pengetahuan, teknologi, kesehatan, dan hukum. Dengan pendekatan yang
			teliti dan penuh perhatian terhadap detail, layanan terjemahan UPA Bahasa
			bertujuan untuk memberikan hasil terjemahan yang akurat dan sesuai dengan
			kebutuhan pelanggan. Selain itu, layanan ini memberikan kemudahan akses
			dan fleksibilitas dalam proses pemesanan serta ketersediaan layanan
			konsultasi untuk membantu pelanggan dalam memahami kebutuhan mereka.
		</p>
	</section>
</section>

<NavigationPages datas={data.nav_page} />
