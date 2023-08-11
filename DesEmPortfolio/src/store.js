// store.js
import { configureStore } from '@reduxjs/toolkit';
import transitionAnimationReducer from './features/transitionAnimationSlice';
import darkModeReducer from './features/darkModeSlice';
import modalReducer from './features/modalSlice';
import languageReducer from './features/languageSlice';


const store = configureStore({
  reducer: {
    transitionAnimation: transitionAnimationReducer,
    darkMode: darkModeReducer,
    modal: modalReducer,
    language: languageReducer,
  },
});

export default store;
