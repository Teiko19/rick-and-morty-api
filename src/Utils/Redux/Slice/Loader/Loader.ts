import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initLoaderSlice } from './InitLoader';

export const LoaderSlice = createSlice({
  name: 'loader',
  initialState: initLoaderSlice,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => { state.loader = action.payload }
  }
});

export const { setLoader } = LoaderSlice.actions;

export default LoaderSlice.reducer;