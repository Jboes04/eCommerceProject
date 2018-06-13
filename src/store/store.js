import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import productReducer from './product/reducer';
import basketReducer from './basket/reducer';

const store = createStore(
  combineReducers({ basketReducer, productReducer}),
  applyMiddleware(thunk, logger));

export default store;
