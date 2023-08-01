<script>
	import { getContext } from 'svelte';
	import { key } from './store';
	const color = getContext(key);
	// export let color;
</script>

<div style="color: {color}">GrandChild A</div>
