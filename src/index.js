import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import App from './components/App';
//* apply our redux thunk middleware

//* create our store object.
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
