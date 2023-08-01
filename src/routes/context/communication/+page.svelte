<script lang="ts">
	import Parent from './Parent.svelte';
	import { setContext } from 'svelte';

	let count = 0;
	// let color = '#ff0000';
	const colorListener = new Set();

	const onClick = () => {
		count++;
		// 	color = count % 2 === 0 ? 'red' : 'blue';
		// 	setContext('color', color);
	};

	let colorObj = {
		color: '#ff0000',
		// regester liensters
		// But listeners are not removed when the child component is destroyed
		// Memory leaks
		listenToColorChange: (fn) => {
			colorListener.add(fn);
		}
	};

	$: colorListener.forEach((fn) => fn(colorObj.color));

	setContext('color', colorObj);
	setContext('click', onClick);
</script>

<p>
	<label
		><input type="color" bind:value={colorObj.color} on:click={onClick} /> {colorObj.color}</label
	>
</p>

<Parent />

<p>Count: {count}</p>
