<script lang="ts">
	import NavbarTopbar from './navbar-top.svelte';
	import NavbarMain from './navbar-main.svelte';

	export let datas: any;
</script>

<nav class="navbar fixed inset-0 z-50 h-16 w-full bg-gray-50 md:h-20">
	<NavbarTopbar datas={datas.topbar} />

	<NavbarMain datas={datas.mainbar} />
</nav>
