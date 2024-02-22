<script lang="ts">
	//----------------------------------------------------------//
	import { SeoHead } from '$lib/components/base';
	//----------------------------------------------------------//
	import Header from './header.svelte';
	import Programs from './programs.svelte';
	import News from './news.svelte';
	import Partnership from './partnership.svelte';
	//----------------------------------------------------------//
	/** @type {import('./$types').PageData} */
	export let data;
	let { header } = data;
	console.log(data);
	//----------------------------------------------------------//
</script>

<SeoHead title="Beranda" />

<Header {header} />

<Partnership />

<Programs />

<News />
