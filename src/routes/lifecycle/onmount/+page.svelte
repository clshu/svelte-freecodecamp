<script lang="ts">
	import Example1 from '$lib/components/Example1.svelte';
	import Example2 from '$lib/components/Example2.svelte';

	let show = false;
</script>

<label>
	Show examples
	<input bind:checked={show} type="checkbox" />
</label>

{#if show}
	<Example1 />
	<Example2 />
{/if}
