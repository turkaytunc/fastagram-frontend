import React from 'react';
import ReactDOM from 'react-dom';
import './tail.css';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/fastagram">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
