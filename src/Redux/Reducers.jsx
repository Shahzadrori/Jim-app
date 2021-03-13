import React from 'react';
import { Add_It } from './Actinon';
import { Init_State } from './State';

export const Reducer=(state = Init_State,action)=>{
    switch(action.type){
        case Add_It:
            return{
                ...state,
                Persona:[...state,action.payload]
            }
            default:
            return state
    }
}