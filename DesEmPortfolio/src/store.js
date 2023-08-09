// store.js
import { configureStore } from '@reduxjs/toolkit';
import transitionAnimationReducer from './features/transitionAnimationSlice';
import darkModeReducer from './features/darkModeSlice';
import modalReducer from './features/modalSlice';


const store = configureStore({
  reducer: {
    transitionAnimation: transitionAnimationReducer,
    darkMode: darkModeReducer,
    modal: modalReducer,
  },
});

export default store;
