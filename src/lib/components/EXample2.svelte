<script>
	import { onMount } from 'svelte';
	let src;

	onMount(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		fetch('https://dog.ceo/api/breeds/image/random', { signal })
			.then((res) => res.json())
			.then(({ message }) => {
				src = message;
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			controller.abort();
		};
	});
</script>

<img {src} alt="dog" style="width: 200px;" />
