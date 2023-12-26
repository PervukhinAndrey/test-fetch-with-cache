import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isOpened: boolean;
  content: any;
};
const initialState: InitialState = {
  isOpened: false,
  content: null,
};

// Generates pending, fulfilled and rejected action types

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<any>) => {
      return (state = { isOpened: true, content: action.payload });
    },
    close: (state) => {
      return (state = { isOpened: false, content: null });
    },
  },
});

export default modalSlice.reducer;
export const { open, close } = modalSlice.actions;
