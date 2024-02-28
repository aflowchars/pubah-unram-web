<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import { Footer, Navbar } from '$lib/components/base';

	export let data;
</script>

<Navbar datas={data.navbar} />

<main
	class={$page.url.href.includes('/programs')
		? 'mb-0 mt-20'
		: 'mb-10 mt-20 md:my-20'}
>
	<slot />
</main>

<Footer datas={data.footer} />
