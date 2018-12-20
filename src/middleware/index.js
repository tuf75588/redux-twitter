import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(thunk, logger));
