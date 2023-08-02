<script>
	import { onDestroy } from 'svelte';

	// import { onMount } from 'svelte';
	import { store1, store2 } from './data';

	// Mini $store implementation

	const subscribers = [];

	setInterval(() => {
		for (const subscriber of subscribers) {
			subscriber(+new Date());
		}
	}, 1000);

	const store3 = {
		subscribe(fn) {
			fn(''); // initial value
			subscribers.push(fn);
			return () => {
				const index = subscribers.indexOf(fn);
				if (index !== -1) {
					subscribers.splice(index, 1);
				}
			};
		},
		set(value) {
			for (const subscriber of subscribers) {
				subscriber(value);
			}
		}
	};

	onDestroy(() => {
		$store2 = '';
	});

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
<h3>store3: {$store3}</h3>

<button on:click={() => ($store3 = 'hello')}>Click Store 3</button>
