<script>
	import { getContext } from 'svelte';

	const color = getContext('color');
</script>

<div style="color: {color}">
	Child 2 {color}
	<button on:click>Click Me</button>
</div>
