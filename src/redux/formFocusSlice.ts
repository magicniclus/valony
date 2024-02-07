import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formFocus: false,
};

const formFocusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    focus(state) {
      state.formFocus = true;
    },
    stopFocus(state) {
      state.formFocus = false;
    },
  },
});

export const { focus, stopFocus } =formFocusSlice.actions;

export default formFocusSlice.reducer;