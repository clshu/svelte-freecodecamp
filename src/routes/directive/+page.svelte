<script>
	let profit = 0;

	$: negative = profit < 0;
</script>

<!-- <div class={profit < 0 ? 'negative' : profit > 0? 'positive' : ''}> -->
<!-- <div class:positive={profit > 0} class:negative={profit < 0}> -->
<div class:positive={profit > 0} class:negative>
	<!-- class:negative is shorthand for class:negative={negative} -->
	Profit: {profit}
</div>

<button on:click={() => profit++}>++</button>
<button on:click={() => profit--}>--</button>

<style>
	.positive {
		color: limegreen;
		font-weight: bold;
	}
	.negative {
		color: red;
		font-weight: bold;
	}
</style>
