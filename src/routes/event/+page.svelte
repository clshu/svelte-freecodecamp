<script lang="ts">
	// old way
	// const h1 = document.querySelector('h1');
	// h1.addEventListener('click', (e) => {});
	// or h1.addEventListener('click', handleClick);

	const handleClick = (e) => {
		console.log('clicked');
	};
</script>

<!-- It does not need to remove the event listener -->
<!-- when the component is destroyed -->
<!-- Inline function and external function perform the same. -->
<button on:click={handleClick}>Event Listener</button>
<button
	on:click={() => {
		console.log('inline handler');
	}}>Inline Event Listener</button
>
<h1 on:click|preventDefault|stopPropagation={handleClick}>Header Listener</h1>
<div on:click={() => console.log('parent')}>
	parent
	<div on:click|stopPropagation={() => console.log('child')}>child</div>
</div>
