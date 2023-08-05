import React from 'react';
import AppRouter from './components/AppRouter'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './main.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);