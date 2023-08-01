<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let count = 0;

	onMount(() => {
		let intervalId = setInterval(() => {
			console.log('count', ++count);
		}, 1000);

		// It reurns a function that will be called when the component is destroyed
		return () => {
			clearInterval(intervalId);
		};
	});
</script>

{count}
