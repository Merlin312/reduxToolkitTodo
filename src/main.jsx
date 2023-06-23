import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './style/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App /> {/* Відображає основний компонент додатка */}
  </Provider>,
  document.getElementById('root')
);
