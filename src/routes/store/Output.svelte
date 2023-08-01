<script>
	import { valueStore } from './data';
	import { onMount } from 'svelte';

	let _value;

	onMount(() => {
		// unsubscribe is returned by subscribe
		// and is returned again by onMount()
		// It will be called when the component is destroyed
		const unsubscribe = valueStore.subscribe((value) => {
			_value = value;
		});
		return unsubscribe;
		// return subscribe(() => {
		// 	_value = value;
		// });
	});
</script>

<h1>value: {_value}</h1>
