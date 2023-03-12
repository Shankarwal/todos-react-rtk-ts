import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { Todo } from "../Types";
import { loadState } from "../localStorage";

type InitialState = Todo[];

const initialState: InitialState = loadState() ? loadState().todos : [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.push(payload);
    },
    toggleTodo: (state, { payload }: PayloadAction<string>) => {
      return state.map((todo: Todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      return state.filter((todo: Todo) => todo.id !== payload);
    },
    clearDone: (state) => {
      return state.filter((todo: Todo) => !todo.completed);
    },
    sortTodos: (state, { payload }: PayloadAction<string>) => {
      if (payload === "oldest") {
        state.sort(
          (a: Todo, b: Todo) =>
            Number(new Date(a.date)) - Number(new Date(b.date))
        );
      }
      if (payload === "latest") {
        state.sort(
          (a: Todo, b: Todo) =>
            Number(new Date(b.date)) - Number(new Date(a.date))
        );
      }
    },
  },
});

export const selectTodoById = createSelector(
  (state: RootState) => state.todos,
  (_: RootState, id: string) => id,
  (todos: Todo[], id: string) => todos.find((todo: Todo) => todo.id === id)
);

export const selectFilteredTodos = createSelector(
  (state: RootState) => state.todos!,
  (state: RootState) => state.filter!,
  (todos: Todo[], filter: string) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  }
)!;

export const selectFilteredTodosByIds = createSelector(
  selectFilteredTodos,
  (todos) => todos?.map((todo: Todo) => todo.id)
);

export const { addTodo, toggleTodo, deleteTodo, clearDone, sortTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
