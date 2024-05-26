import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import { apiSlice } from "./api/apiSlice";
import { getApiSlice } from "./api/getApiSlice.js";


export const store = configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      [getApiSlice.reducerPath]: getApiSlice.reducer,
      auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware, getApiSlice.middleware),
  devTools: true
})