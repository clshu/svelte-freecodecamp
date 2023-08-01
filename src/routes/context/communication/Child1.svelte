<script>
	import { getContext } from 'svelte';

	const colorObj = getContext('color');
	let color = colorObj.color;
	// regester a callback function to be called when the value of the context changes
	colorObj.listenToColorChange((newColor) => {
		color = newColor;
	});
</script>

<div style="color: {color}">
	Child 1 {color}
	<button on:click>Click Me</button>
</div>
