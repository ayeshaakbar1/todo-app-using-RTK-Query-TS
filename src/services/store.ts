import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/services/Slices/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../features/todo/services/api/todoApi";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
