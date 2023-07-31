<script>
	let flavours = [];
	let option = '';
</script>

<section>
	<button
		on:click={() => {
			flavours = [];
		}}>Reset</button
	>
	<label>
		<input type="checkbox" name="bar" bind:group={flavours} value="1" />
		1
	</label>
	<label>
		<input type="checkbox" name="bar" bind:group={flavours} value="2" />
		2
	</label>
	<label>
		<input type="checkbox" name="bar" bind:group={flavours} value="3" />
		3
	</label>

	flavours: {flavours.join(', ') || '-'}
</section>
<br />
<section>
	<button
		on:click={() => {
			option = '';
		}}>Reset</button
	>
	<label>
		<input type="radio" name="fruit" bind:group={option} value="apple" />
		1
	</label>
	<label>
		<input type="radio" name="fruit" bind:group={option} value="orange" />
		2
	</label>
	<label>
		<input type="radio" name="fruit" bind:group={option} value="grape" />
		3
	</label>
	<label>
		<input type="radio" name="fruit" bind:group={option} value="banana" />
		4
	</label>

	<h2>Select Option: {option}</h2>
</section>
