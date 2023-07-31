<script>
	import { createEventDispatcher } from 'svelte';

	export let count = 0;
	const dispatch = createEventDispatcher();

	$: dispatch('countChanged', count);
</script>

<section>
	<h2>Binding Component</h2>
	<button on:click={() => count++}>Click Me</button>
	<div>Count: {count}</div>
</section>
