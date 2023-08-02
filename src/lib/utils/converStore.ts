export const makeReduxStoreToSvelteStore = (reduxStore) => {
	return {
		...reduxStore,
		subscribe(fn) {
			fn(reduxStore.getState()); // initial value
			// return and unsubscribe function
			return reduxStore.subscribe(() => {
				fn(reduxStore.getState());
			});
		}
	};
};
