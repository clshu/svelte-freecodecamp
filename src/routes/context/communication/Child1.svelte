<script>
	import { getContext } from 'svelte';

	const color = getContext('color');
</script>

<div style="color: {color}">
	Child 1 {color}
	<button on:click>Click Me</button>
</div>
