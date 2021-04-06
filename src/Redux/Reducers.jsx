import { B_STATE, C_State, D_State, E_State, Init_State } from "./State";
import { ADD, GET, PIC, TAKE, Time } from "./Type";

export const Reducer = (state = Init_State, action) => {
  switch (action.type) {
    case ADD:
      return [action.payload];
    default:
      return state;
  }
};
export const B_Reducer = (state = B_STATE, action) => {
  switch (action.type) {
    case TAKE:
      return [action.payload];
    default:
      return state;
  }
};
export const C_Reducer = (state = C_State, action) => {
  switch (action.type) {
    case GET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const D_Reducer = (state = D_State, action) => {
  switch (action.type) {
    case PIC:
      return [...state,action.payload];
    default:
      return state;
  }
};
export const E_Reducer = (state = E_State,action) =>{
  switch(action.type){
    case Time:
      return [action.payload]
      default :
       return state
  }
}
