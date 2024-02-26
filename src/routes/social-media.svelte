<script>
	import { onMount } from 'svelte';
	import {
		MoreHorizIconRegular,
		NavArrowLeftIconRegular
	} from '$lib/icons/iconoir';

	// import { PUBLIC_INSTAGRAM_URL } from '$env/static/public';

	// async function getInstagramData() {
	// 	let res = await fetch(PUBLIC_INSTAGRAM_URL, {
	// 		method: 'GET'
	// 	});

	// 	let data = await res.json();

	// 	console.log(data);
	// }

	// onMount(() => {
	// 	getInstagramData();
	// });
</script>

<div class="container mx-auto mt-20 max-w-screen-2xl px-10">
	<div class="flex flex-row gap-20">
		<section class="basis-4/12">
			<nav class="flex flex-row items-center justify-between">
				<NavArrowLeftIconRegular class="h-6 w-6 stroke-2" />

				<h6 class="text-base font-semibold">upa_bahasaunram</h6>

				<MoreHorizIconRegular class="h-6 w-6 stroke-2" />
			</nav>
		</section>

		<section class="basis-8/12">Halo 2</section>
	</div>
</div>
