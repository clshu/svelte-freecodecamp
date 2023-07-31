<script lang="ts">
	import BindingComponent from '$lib/components/BindingComponent.svelte';

	let count = 0;

	const onInput = (event) => {
		// value = this.value;
		count = event.target.value;
	};
</script>

// Binding can bind multiple elements or components together to share the same state of a variable.
<input type="number" on:input={onInput} />
<!-- If local state named value, bind:value={value} can be bind:value -->
<input bind:value={count} />

<div><p>Count: {count}</p></div>

<button
	on:click={() => {
		count = 0;
	}}>Reset</button
>

<!-- <BindingComponent
	on:countChanged={(e) => {
		count = e.detail;
	}}
/> -->

<BindingComponent bind:count />
