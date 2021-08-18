import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../types';

const initialState = {
	isLoading: false,
	isError: false
} as Loading;

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

export const { setLoading, setError } = loadingSlice.actions;

export default loadingSlice.reducer;
