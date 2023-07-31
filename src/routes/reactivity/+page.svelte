<script lang="ts">
	let count = 0;
	let firstname = 'John';
	let lastname = 'Doe';
	let a = 1,
		b = 2,
		c = 3;

	// svelte will automatically detect the dependencies in its depency graph
	// count -> double -> doSomething
	// count -> double -> console.log(`${count} * 2 = ${double}`)

	$: console.log(`${count} * 2 = ${double}`); // dependency: console, count, double
	$: fullname = `${firstname} ${lastname}`; // dependency: firstname, lastname
	$: sum = a + b + c; // dependency: a, b, c
	$: doSomething(); // dependency: doSomething
	$: double = count * 2; // dependency: count

	// count change won't trigger this function because it's not a dependency
	// function doSomething(a, b) {
	// 	console.log(`${a} + ${b} = ${a + b + count}`);
	// }

	function increment() {
		count += 1;
	}

	function decrement() {
		count--;
	}

	function doSomething() {
		console.log(`${count} * 2 = ${double}`);
	}
</script>

<button on:click={increment}>+</button>
<h3>{count} * 2 = {double}</h3>
<button on:click={decrement}>-</button>
<br />
<button on:click={doSomething}>Do something</button>
