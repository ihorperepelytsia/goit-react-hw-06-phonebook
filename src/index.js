import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/containers/getContactsContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/index';

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
