<script lang="ts">
	import '../app.pcss';
	import { Footer, Navbar } from '$lib/components/base';
</script>

<Navbar />

<main class="relative z-10 mt-[77px] md:mt-[108px]">
	<slot />
</main>

<Footer />
