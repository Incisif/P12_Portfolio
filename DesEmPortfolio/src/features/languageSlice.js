import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'fr',
  },
  reducers: {
    switchToEnglish: (state) => {
      state.value = 'en';
    },
    switchToFrench: (state) => {
      state.value = 'fr';
    },
  },
});

export const { switchToEnglish, switchToFrench } = languageSlice.actions;

export const selectLanguage = (state) => state.language.value;

export default languageSlice.reducer;
