<script>
	import { value, subscribe } from './data';
	import { onMount } from 'svelte';

	let _value = value;

	onMount(() => {
		// unsubscribe is returned by subscribe
		// and is returned again by onMount()
		// It will be called when the component is destroyed
		return subscribe(() => {
			_value = value;
		});
	});
</script>

<h1>value: {_value}</h1>
