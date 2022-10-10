import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Loading } from '../../models/app.model';

// Set initialState
const initialState = {
  isLoading: true,
  isError: false
} as Loading;

/*
 * Create loadingSlice with combined actions
 * Including: App loading state and app error state
 */
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

// Export loading actions from loadingSlice
export const { setLoading, setError } = loadingSlice.actions;

// Export reducer
export default loadingSlice.reducer;
