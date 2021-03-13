import { combineReducers, createStore } from "redux";
import { Reducer } from "./Reducers";

const Rootreducer = combineReducers(Reducer);
export const Store = createStore(
  Rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
