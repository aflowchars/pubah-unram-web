<script lang="ts">
	import NavbarTopbar from './navbar-top.svelte';
	import NavbarMain from './navbar-main.svelte';
	import NavbarMobile from './navbar-mobile.svelte';

	export let datas: any;
</script>

<nav
	class="navbar fixed inset-0 z-50 flex h-20 w-full flex-col items-start overflow-hidden bg-slate-50 md:h-28"
>
	<NavbarTopbar datas={datas.topbar} />

	<NavbarMain datas={datas.mainbar} />

	<NavbarMobile datas={datas.mainbar} />
</nav>
