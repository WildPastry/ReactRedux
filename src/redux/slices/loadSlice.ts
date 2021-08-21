// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../../types';

// set initialState
const initialState = {
	isLoading: false,
	isError: false
} as Loading;

// create loadingSlice with combined actions
// including: app loading state and app error state
const loadingSlice = createSlice({
	name: 'loadPage',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setError(state, action: PayloadAction<boolean>) {
			state.isError = action.payload;
		}
	}
});

// export loading actions from loadingSlice
export const { setLoading, setError } = loadingSlice.actions;

// export reducer
export default loadingSlice.reducer;
