<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180',
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />

		<svg
			class="h-5 w-5 shrink-0 stroke-2 text-foreground transition-transform duration-200"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 256 256"
		>
			<path
				d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
			/>
		</svg>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
