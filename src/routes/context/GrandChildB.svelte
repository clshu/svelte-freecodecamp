<script>
	import { getContext } from 'svelte';
	import { key } from './store';
	const color = getContext(key);
	// export let color;
</script>

<div>GrandChild B: {color}</div>
