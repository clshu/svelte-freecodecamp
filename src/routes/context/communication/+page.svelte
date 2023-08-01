<script lang="ts">
	import Parent from './Parent.svelte';
	import { setContext } from 'svelte';

	let color = 'red';
	let count = 0;

	setContext('color', color);

	const onClick = () => {
		count++;
		// 	color = count % 2 === 0 ? 'red' : 'blue';
		// 	setContext('color', color);
	};
</script>

<p>
	<label><input type="color" bind:value={color} on:click={onClick} /> {color}</label>
</p>

<Parent on:click={onClick} />

<p>Count: {count}</p>
