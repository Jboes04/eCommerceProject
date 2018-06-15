import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import productReducer from './product/reducer';
import basketReducer from './basket/reducer';
import profileReducer from './profile/reducer';

const store = createStore(
  combineReducers({ basketReducer, productReducer, profileReducer}),
  applyMiddleware(thunk, logger));

export default store;
