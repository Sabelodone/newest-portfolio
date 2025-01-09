// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the `client` import
import App from './App';
import './index.css';


// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
