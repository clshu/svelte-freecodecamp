<script lang="ts">
	import MyChild from '$lib/components/MyChild.svelte';
	let name = 'world';
	const obj = { name: 'John', email: 'John@test.com' };
</script>

<h1>Hello {name}!</h1>
<MyChild {name} />
<!-- formatter will convert name={name} to {name} -->
<!-- <MyChild name={name} /> -->
<MyChild name="Haha" />
<MyChild />
<MyChild {...obj} />
<MyChild name={obj.name} email={obj.email} />
