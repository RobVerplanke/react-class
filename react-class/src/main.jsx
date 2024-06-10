import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const name = 'Harry';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name={name} />
  </React.StrictMode>
);
