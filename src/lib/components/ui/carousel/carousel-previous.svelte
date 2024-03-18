<script lang="ts">
	import {
		Button,
		type Props,
		buttonVariants
	} from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { ArrowLeft, ChevronLeft } from 'radix-icons-svelte';
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let variant: VariantProps<typeof buttonVariants>['variant'] =
		'outline';
	export let size: VariantProps<typeof buttonVariants>['size'] = 'icon';

	const { orientation, canScrollPrev, scrollPrev, handleKeyDown } =
		getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		'border-1.5 relative flex h-8 w-8 touch-manipulation items-center justify-center rounded-full bg-white/0 hover:bg-white/15',
		$canScrollPrev ? 'border-white' : 'border-white/25',
		className
	)}
	disabled={!$canScrollPrev}
	on:click={scrollPrev}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<ChevronLeft
		class="h-5 w-5 stroke-2 {$canScrollPrev ? 'text-white' : 'text-white/75'}"
	/>
	<span class="sr-only">Previous slide</span>
</Button>
