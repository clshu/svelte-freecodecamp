import { writable, readable } from 'svelte/store';

export const store1 = readable(0, (set) => {
	let i = 0;
	let intervalId = setInterval(() => {
		set(i++);
	}, 1000);
	return () => {
		console.log('store1 readable stopped');
		clearInterval(intervalId);
	};
});

export const store2 = writable('');
