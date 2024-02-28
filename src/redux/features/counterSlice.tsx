import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type counterType = {
  count: number;
};

const initialState: counterType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
