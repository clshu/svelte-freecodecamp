<script>
	// import { onMount } from 'svelte';
	import { store1, store2 } from './data';

	// let value1;
	// let value2;

	// onMount(() => {
	// 	const unsubscribe1 = store1.subscribe((value) => {
	// 		value1 = value;
	// 	});
	// 	const unsubscribe2 = store2.subscribe((value) => {
	// 		value2 = value;
	// 	});
	// 	return () => {
	// 		unsubscribe1();
	// 		unsubscribe2();
	// 	};
	// });
</script>

<!-- <h2>store1: {value1}</h2> -->
<!-- <h2>store2: {value2}</h2> -->

<h2>store1: {$store1}</h2>
<h2>store2: {$store2}</h2>
