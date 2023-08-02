<script lang="ts">
	import store, { decremented, incremented } from './store';
	// import { onMount } from 'svelte';

	// redux store implementation
	// let state = 0;
	// onMount(() => {
	// 	return store.subscribe(() => {
	// 		state = store.getState();
	// 	});
	// });

	const increment = () => {
		store.dispatch(incremented());
	};
	const decrement = () => {
		store.dispatch(decremented());
	};
</script>

<button on:click={decrement}>-</button>
<span>{$store}</span>
<button on:click={increment}>+</button>
