<script>
	import { onDestroy, afterUpdate } from 'svelte';
	import markUpdate from '$lib/utils/markUpdate';

	let count = 0;

	const action = markUpdate();

	onDestroy(() => {
		console.log('onDestroy');
	});
	// beforeUpdate(() => {
	// 	console.log('beforeUpdate');
	// });
	afterUpdate(() => {
		console.log('afterUpdate');
	});

	const increment = () => {
		count++;
	};
</script>

<h2>LifeCycle</h2>
<p>Count: {count}</p>
<button use:action on:click={increment}>Increment</button>
