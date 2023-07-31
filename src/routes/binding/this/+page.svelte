<script>
	import { onMount } from 'svelte';
	import ThisChild from '$lib/components/ThisChild.svelte';

	let element;
	let child;

	let count = 0;

	// console.log(element); // undefined
	onMount(() => {
		console.log(element); // <input>
		// require <svelte:options accessors />
		console.log(child.count); // <ThisChild>
	});

	const reset = () => {
		element.value = '';
	};
	const resetChild = () => {
		child.reset();
	};
</script>

<!-- bind:this is one way binding -->
<input bind:this={element} />
<hr />
<button on:click={reset}>Reset</button>
<hr />
<p>Child count: {count}</p>
<button on:click={resetChild}>Reset Child</button>

<hr />
<ThisChild bind:this={child} bind:count />
