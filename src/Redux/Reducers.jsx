import React from 'react';
import { B_STATE, Init_State } from './State';
import { ADD, TAKE } from './Type';

export const Reducer=(state = Init_State , action)=>{
    switch(action.type){
        case ADD:
            return[
                action.payload
            ]
            default:
            return state
    }
}
export const B_Reducer=(state = B_STATE,action)=>{
    switch(action.type){
        case TAKE:
            return[
                // ...state,
            ...state,action.payload
            ]
            default:
                return state
    }
}
