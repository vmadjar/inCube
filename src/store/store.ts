import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "../features/users/pageSlice";
import { usersApi } from "../features/users/usersApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    pages: pageSlice
    },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
