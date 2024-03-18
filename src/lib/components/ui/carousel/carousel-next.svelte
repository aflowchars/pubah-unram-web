<script lang="ts">
	import {
		Button,
		type Props,
		buttonVariants
	} from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import { ArrowRight, ChevronRight } from 'radix-icons-svelte';
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let variant: VariantProps<typeof buttonVariants>['variant'] =
		'outline';
	export let size: VariantProps<typeof buttonVariants>['size'] = 'icon';

	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext('<Carousel.Next/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		`border-1.5 relative flex h-8 w-8 touch-manipulation items-center justify-center rounded-full bg-white/0 hover:bg-white/15`,
		$canScrollNext ? 'border-white' : 'border-white/25',
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<ChevronRight
		class="h-5 w-5 {$canScrollNext ? 'text-white' : 'text-white/75'}"
	/>
	<span class="sr-only">Next slide</span>
</Button>

<!-- $orientation === 'horizontal' ? 'right-5 top-1/2 -translate-y-1/2' : '-bottom-5 left-1/2 -translate-x-1/2 rotate-90', -->
