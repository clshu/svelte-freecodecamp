<script>
	import Parent from '$lib/components/Parent.svelte';
	const onElementButtonClick = (event) => {
		console.log('onElementButtonClick: ', event.target.dataset.value);
	};
	const onComponentButtonClick = (event) => {
		console.log('onComponentButtonClick: ', event.detail);
	};
</script>

<Parent
	on:componentButtonClick={onComponentButtonClick}
	on:click={() => console.log('onClick in page component!')}
/>

<br />
Element:

<div on:click={onElementButtonClick}>
	<button data-value="button1">Element Click 1</button>
	<button data-value="button2">Element Click 2</button>
</div>
