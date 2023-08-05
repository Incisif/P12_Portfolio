// store.js
import { configureStore } from '@reduxjs/toolkit';
import transitionAnimationReducer from './features/transitionAnimationSlice';
import darkModeReducer from './features/darkModeSlice';

const store = configureStore({
  reducer: {
    transitionAnimation: transitionAnimationReducer,
    darkMode: darkModeReducer,
    // Ajoutez d'autres reducers ici si nécessaire
  },
});

export default store;
