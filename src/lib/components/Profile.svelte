<script>
	import { createEventDispatcher } from 'svelte';

	export let name = 'MyName';
	export let status = 'MyStatus';
	// 1. default to no-op
	// export let onSkillPointChange = () => {};
	// 4. create dispatcher, and dispatch event
	// no need to declare onSkillPointChange
	// export let onSkillPointChange;

	// It has to be on top level of <scipt> tag
	// It can not be called inside a function
	const dispatch = createEventDispatcher();

	let skillPoint = 0;

	// 2. use $: and if to test if onSkillPointChange is passed
	// $: if (typeof onSkillPointChange === 'function') onSkillPointChange(skillPoint);
	// 3. call onSkillPointChange if it is passed and non-null
	// $: if (onSkillPointChange) onSkillPointChange(skillPoint);
	// 4. create dispatcher, and dispatch event
	$: dispatch('skillPointChanged', skillPoint);

	const incrementSkillPoint = () => {
		skillPoint++;
	};
	const decrementSkillPoint = () => {
		if (skillPoint > 0) {
			skillPoint--;
		}
	};
</script>

<section>
	<dl>
		<dt>Name:</dt>
		<dd>{name}</dd>
		<dt>Status:</dt>
		<dd>{status}</dd>
	</dl>

	<button on:click={decrementSkillPoint}>-</button>
	{skillPoint}
	<button on:click={incrementSkillPoint}>+</button>
</section>

<style>
	section {
		border: 10px solid #ccc;
		padding: 10px;
	}
	dd {
		color: rebeccapurple;
	}
</style>
