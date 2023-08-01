<script>
	import { setContext, getContext } from 'svelte';
	import { key } from './store';
	import GrandChildA from './GrandChildA.svelte';
	const color = getContext(key);
	setContext(key, 'green');
	// export let color;
</script>

child2: >> {color}

<GrandChildA />
