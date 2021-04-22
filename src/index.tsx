import React from 'react';
import ReactDOM from 'react-dom';
import './tail.css';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from 'src/context/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
