import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoSlice";
import filterReducer from "./features/FilterSlice";
import { saveState } from "./localStorage";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
