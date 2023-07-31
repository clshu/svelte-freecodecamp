<script>
	// import { createEventDispatcher } from 'svelte';
	import GrandChild from './GrandChild.svelte';

	// Bubble up event the hard way
	// const dispatch = createEventDispatcher();

	// const onComponentButtonClick = (event) => {
	// 	console.log('In child svelte: ', event.detail);
	// 	dispatch('componentButtonClick', event.detail);
	// };
</script>

<!-- Bubble up event the hard way -->
<!-- <GrandChild on:componentButtonClick={onComponentButtonClick} /> -->

<!-- Forwarding the event -->
<GrandChild on:componentButtonClick on:click />
