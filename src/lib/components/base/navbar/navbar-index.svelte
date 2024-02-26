<script lang="ts">
	import NavbarTopbar from './navbar-top.svelte';
	import NavbarMain from './navbar-main.svelte';
	import NavbarMobile from './navbar-mobile.svelte';

	// import * as Menubar from '$lib/components/ui/menubar';

	export let datas: any;
</script>

<nav class="navbar fixed inset-0 z-50 h-16 w-full bg-gray-50 md:h-20">
	<NavbarTopbar datas={datas.topbar} />

	<NavbarMain datas={datas.mainbar} />

	<NavbarMobile datas={datas.mainbar} />
</nav>
