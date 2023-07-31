<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// const onClick1 = () => {
	// 	dispatch('click', 'button1');
	// };
	const onClick2 = () => {
		dispatch('componentButtonClick', 'button2');
	};
</script>

<!-- <button on:click={onClick1}>Click Me 1</button> -->
<!-- The element event can be shorthand too -->
<button on:click>Click Me 1</button>
<button on:click={onClick2}>Click Me 2</button>
