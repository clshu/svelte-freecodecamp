<script>
	import LifeCycle from '$lib/components/LifeCycle.svelte';

	let condition = false;
</script>

<label>
	<input type="checkbox" bind:checked={condition} />
	<span>Mount LifeCycle component</span>
</label>

{#if condition}
	<LifeCycle />
{/if}
