import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../types';

const initialState: Loading = {
	isLoading: true,
	isError: false
};

const loadingSlice = createSlice({
	name: 'loadPage',
	initialState,
	reducers: {
		setLoading(_state, action: PayloadAction<Loading>) {
			return action.payload;
		}
	}
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
