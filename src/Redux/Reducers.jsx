import React from 'react';
import { Init_State } from './State';
import { ADD } from './Type';

export const Reducer=(state = Init_State , action)=>{
    switch(action.type){
        case ADD:
            return{
                card_item:[action.payload]
            }
            default:
            return state
    }
}
// export const BReducer=(state = )