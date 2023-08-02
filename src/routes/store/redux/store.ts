// import './patchProcess';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		incremented: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state += 1;
			return state;
		},
		decremented: (state) => {
			state -= 1;
			return state;
		}
	}
});

// Action creators are generated for each case reducer function
export const { incremented, decremented } = counterSlice.actions;

const reduxStore = configureStore({
	reducer: counterSlice.reducer
});

export default reduxStore;
