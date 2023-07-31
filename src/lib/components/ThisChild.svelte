<svelte:options accessors />

<script>
	export let count = 0;

	export const reset = () => {
		count = 0;
	};
</script>

<section>
	<h2>ThisChild.svelte</h2>
	<p>Count: {count}</p>
	<button on:click={() => (count += 1)}>Increment</button>
	<button on:click={() => (count -= 1)}>Decrement</button>
</section>
