<script lang="ts">
	type Address = {
		id: number;
		link: string;
		label: string;
	};
	export let address: Address;

	type Telephone = {
		id: number;
		link: string;
		label: string;
	};

	export let telephone: Telephone;

	type Email = {
		id: number;
		link: string;
		label: string;
	};
	export let email: Email;
</script>

<section
	class="mt-16 flex flex-col items-start justify-between gap-5 md:mt-16 md:flex-row md:items-center md:gap-0"
>
	<a
		target="_blank"
		href={address?.link}
		class="w-full text-sm leading-relaxed hover:underline md:w-80"
	>
		{address?.label || 'Ini Alamat'}
	</a>

	<div class="flex items-center gap-5">
		<a href={telephone?.link} class="text-sm hover:underline">
			{telephone?.label || 'Ini Telephone'}
		</a>

		<p class="text-sm">|</p>

		<a href={email?.link} class="text-sm hover:underline">
			{email?.label || 'Ini Email'}
		</a>
	</div>
</section>
