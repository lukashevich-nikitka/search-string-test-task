/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/index.css';
import App from './app.jsx';
// import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
