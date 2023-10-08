import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/main.css';
import { HashRouter } from 'react-router-dom';
import store from '@s/index.ts';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
