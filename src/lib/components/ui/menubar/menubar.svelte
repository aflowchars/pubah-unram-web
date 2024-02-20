<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = MenubarPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<MenubarPrimitive.Root class={cn(className)}>
	<slot />
</MenubarPrimitive.Root>
