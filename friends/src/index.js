import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { authTokenLocalStorage } from './middleware';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, authTokenLocalStorage, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
