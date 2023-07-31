<script lang="ts">
	import { tick } from 'svelte';
	let value = '';

	async function onInput(e) {
		const input = this;
		let seclectionStart = input.selectionStart;
		let seclectionEnd = input.selectionEnd;
		value = input.value.toUpperCase();
		// wait unitl DOM updates
		await tick();
		// restore cursor position
		input.selectionStart = seclectionStart;
		input.selectionEnd = seclectionEnd;
	}
</script>

<input type="text" on:input={onInput} {value} />

<button
	on:click={() => {
		setTimeout(() => {
			console.log('TIMEOUT: ', value);
			value = 'xxx';
		}, 3000);
	}}
>
	update value</button
>
