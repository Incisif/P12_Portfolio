// transitionAnimationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enableAnimations: true,
};

const transitionAnimationSlice = createSlice({
  name: 'transitionAnimation',
  initialState,
  reducers: {
    toggleAnimations(state) {
      state.enableAnimations = !state.enableAnimations;
    },
  },
});

export const { toggleAnimations } = transitionAnimationSlice.actions;
export default transitionAnimationSlice.reducer;
