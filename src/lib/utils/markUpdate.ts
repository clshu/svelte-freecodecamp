import { onMount, beforeUpdate } from 'svelte';

const markUpdate = () => {
	let elements = new Set();

	beforeUpdate(() => {
		console.log('beforeUpdate');
		elements.forEach((el) => {
			el.style.outlineColor = 'red';

			setTimeout(() => {
				if (elements.has(el)) {
					el.style.outlineColor = 'black';
				}
			}, 2000);
		});
	});

	onMount(() => {
		console.log('onMount');
		elements.forEach((el) => {
			el.style.outline = '2px solid black';
			el.style.margin = '8px';
		});
	});

	return function markUpdateAction(node) {
		elements.add(node);
		return {
			destroy() {
				elements.delete(node);
			}
		};
	};
};

export default markUpdate;
