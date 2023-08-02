<script>
	import { store2 } from './data';

	let _value = '';
	const handleInput = (e) => {
		$store2 = e.currentTarget.value;
		_value = $store2;
	};
</script>

<!-- <input on:input={(e) => store2.set(e.target.value)} /> -->

<input on:input={handleInput} bind:value={_value} />
