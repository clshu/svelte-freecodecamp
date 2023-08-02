import { readable } from 'svelte/store';

// readable only supports one subscriber
// only set up once
export const valueStore = readable('hello', (set) => {
	console.log('valueStore readable started');
	const timeoutId = setTimeout(() => {
		set('world');
	}, 1000);

	return () => clearTimeout(timeoutId);
});

// export let value = '';
// let subscribers = [];

// export const update = (newValue) => {
// 	value = newValue;

// 	subscribers.forEach((fn) => fn(value));
// };

// export const subscribe = (fn) => {
// 	subscribers.push(fn);
// 	console.log(`sub: subscribers size: ${subscribers.length}`);
// 	return function unsubscribe(fn) {
// 		subscribers.splice(subscribers.indexOf(fn), 1);
// 		console.log(`unsub: subscribers size: ${subscribers.length}`);
// 	};
// };
