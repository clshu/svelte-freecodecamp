<script>
	import Child1 from './Child1.svelte';

	let show = true;
</script>

<label><input type="checkbox" bind:checked={show} /> Show</label>

{#if show}
	<!-- <Child1 on:click /> -->
	<!-- <Child1 on:click /> -->
	<Child1 />
	<Child1 />
{/if}
