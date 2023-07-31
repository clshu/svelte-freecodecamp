<script>
	// import { createEventDispatcher } from 'svelte';

	import Child from './Child.svelte';

	// Bubble up event the hard way
	// const dipatch = createEventDispatcher();

	// const onComponentButtonClick = (event) => {
	// 	console.log('In parent svelte: ', event.detail);
	// 	dipatch('componentButtonClick', event.detail);
	// };
</script>

<!-- Bubble up event the hard way -->
<!-- <Child on:componentButtonClick={onComponentButtonClick} /> -->

<!-- Forwarding the event -->
<Child on:componentButtonClick on:click />
