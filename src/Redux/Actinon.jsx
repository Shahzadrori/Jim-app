import { ADD } from "./Type"

export const Add_It=(Data)=>{
    console.log(Data)
    return{
        type:ADD,
        payload:Data
    }
}