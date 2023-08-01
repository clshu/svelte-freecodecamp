<script>
	// contex API must be used in the inializtion of the component
	import { setContext } from 'svelte';
	import Child from './Child.svelte';
	import Child2 from './Child2.svelte';
	// Make sure key is unique
	import { key } from './store';

	setContext(key, 'red');

	// let color = 'red';
</script>

<div style="border: 3px solid black">
	Parent A
	<!-- <Child {color} />
	<Child2 {color} /> -->

	<Child />
	<Child2 />
</div>
