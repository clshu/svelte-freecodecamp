<script lang="ts">
	import { tick } from 'svelte';

	let count = 0;

	$: double = count * 2; // dependency: count

	// tick returns a promise that resolves on the next microtask
	// it's useful for waiting for DOM updates
	async function increment() {
		count += 1;
		console.log('before ', double);
		await tick();
		console.log('after ', double);
	}

	function decrement() {
		count--;
	}

	function doSomething() {
		console.log(`${count} * 2 = ${double}`);
	}
</script>

<button on:click={increment}>+</button>
<h3>{count} * 2 = {double}</h3>
<button on:click={decrement}>-</button>
<br />
<button on:click={doSomething}>Do something</button>
