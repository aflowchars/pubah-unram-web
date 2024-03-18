<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import { Footer, Navbar } from '$lib/components/base';

	export let data;
</script>

<Navbar datas={data.navbar} />

<main class="relative z-0 mt-20 md:mt-28">
	<slot />
</main>

<Footer datas={data.footer} />
