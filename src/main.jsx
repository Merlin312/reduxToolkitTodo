import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './style/index.css';
import PracticeApp from './PracticeApp';

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> Відображає основний компонент додатка */}
    <PracticeApp />
  </Provider>,
  document.getElementById('root')
);
