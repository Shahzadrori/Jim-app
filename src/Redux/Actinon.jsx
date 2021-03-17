import { ADD, Take } from "./Type"

export const Add_It=(Data)=>{
    console.log(Data)
    return{
        type:ADD,
        payload:Data
    }
}
export const Take_It=(Inp_values) =>{
    return{
        type:Take,
        payload:Inp_values
    }
}