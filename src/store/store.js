import { applyMiddleware, createStore } from 'redux';
import productReducer from './product/reducer';
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  productReducer,
  applyMiddleware(thunk, logger));

export default store;
