import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import productReducer from './product/reducer';
import basketReducer from './basket/reducer';
import basketReducerAsup from './basket/reducerAsup';

const store = createStore(
  combineReducers({ basketReducer, productReducer}),
  //basketReducer,
  applyMiddleware(thunk, logger));

export default store;
