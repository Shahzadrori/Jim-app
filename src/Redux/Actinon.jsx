import { ADD, GET, PIC, TAKE } from "./Type";

export const Add_It = (Data) => {
  return {
    type: ADD,
    payload: Data,
  };
};
export const Take_It = (REGIS) => {
  return {
    type: TAKE,
    payload: REGIS,
  };
};
export const Get_It = (Fil_value) => {
  return {
    type: GET,
    payload: Fil_value,
  };
};
export const Get_Pic = (imgs) => {
  return {
    type: PIC,
    payload: imgs,
  };
};
