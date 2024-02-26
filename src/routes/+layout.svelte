<script lang="ts">
	import '../app.pcss';
	import { Footer, Navbar } from '$lib/components/base';

	export let data;
</script>

<Navbar datas={data.navbar} />

<main class="relative z-10 mb-16 mt-16 md:mb-28 md:mt-[6.75rem]">
	<slot />
</main>

<Footer datas={data.footer} />
