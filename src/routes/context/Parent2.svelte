<script>
	import { setContext } from 'svelte';
	import GrandChildA from './GrandChildA.svelte';

	import { key } from './store';

	setContext(key, 'blue');
</script>

<GrandChildA />
