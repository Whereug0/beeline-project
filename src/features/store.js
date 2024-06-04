import { configureStore } from "@reduxjs/toolkit";
import { getApiSlice } from "./api/getApiSlice.js";


export const store = configureStore({
  reducer: {
      [getApiSlice.reducerPath]: getApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(getApiSlice.middleware),
  devTools: true
})