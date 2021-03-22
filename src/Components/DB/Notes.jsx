import { openDB } from "idb"
import { useEffect } from "react"
import Database from "./Db"

const Dataget=()=>{
   function gets(){
       console.log(Database.call(indexedDB).notes)
        return Database
    }
    gets()
    
}
export default Dataget