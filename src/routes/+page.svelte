<script lang="ts">
	//----------------------------------------------------------//
	import { SeoHead } from '$lib/components/base';
	//----------------------------------------------------------//
	import Header from './header.svelte';
	import Programs from './programs.svelte';
	import News from './news.svelte';
	import Partnership from './partnership.svelte';
	//----------------------------------------------------------//
	export let data;

	let { header } = data;
	//----------------------------------------------------------//
	// let arr = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
	// arr.splice(3, 4);
	//----------------------------------------------------------//
	$: innerWidth = 0;

	console.log(innerWidth);
</script>

<svelte:window bind:innerWidth />

<p>
	{innerWidth}
</p>

<SeoHead title="Beranda" />

<Header {header} />

<Partnership />

<Programs />

<News />
