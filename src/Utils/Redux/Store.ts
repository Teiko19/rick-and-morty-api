import { configureStore } from "@reduxjs/toolkit";
import { LoaderSlice } from "./Slice/Loader/Loader";

export const store = configureStore({
  reducer: {
    loader: LoaderSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const getStoreLoader = (state: RootState) => state.loader