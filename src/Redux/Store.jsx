import { combineReducers, createStore } from "redux";
import { B_Reducer, C_Reducer, D_Reducer, E_Reducer, Reducer } from "./Reducers";

const Rootreducer = combineReducers({
  Areducer: Reducer,
  Breducer: B_Reducer,
  Creducer: C_Reducer,
  Dreducer: D_Reducer,
  Ereducer: E_Reducer,
});
export const Store = createStore(
  // Reducer
  Rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
