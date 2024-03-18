<script lang="ts">
	//----------------------------------------------------------//
	import { SeoHead } from '$lib/components/base';
	//----------------------------------------------------------//
	import Header from './header.svelte';
	import Programs from './programs.svelte';
	import News from './news.svelte';
	import Partnership from './partnership.svelte';
	import CallToAction from './call-to-action.svelte';
	import type { PageData } from './$types';
	//----------------------------------------------------------//

	export let data: PageData;
	let { hero, partner, call_to_action, blogs } = data;

	//----------------------------------------------------------//
</script>

<SeoHead title="Beranda" />

<Header data={hero} />

<Partnership data={partner} />

<Programs />

<News data={blogs} />

<CallToAction data={call_to_action} />
