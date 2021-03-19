import { ADD, TAKE } from "./Type"

export const Add_It=(Data)=>{
    return{
        type:ADD,
        payload:Data
    }
}
export const Take_It=(REGIS)=>{
     return{
         type:TAKE,
         payload:REGIS
     }
}