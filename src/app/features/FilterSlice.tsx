import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

type Filters = {
  [key: string]: string;
  All: string;
  Active: string;
  Completed: string;
};

export const StatusFilters: Filters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState: string = loadState()
  ? loadState().filter
  : StatusFilters.All;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
