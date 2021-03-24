import { openDB } from "idb"
import { connect } from "react-redux";
import { Get_It } from "../../Redux/Actinon";


export async function Database(regis) {
    // console.log(regis)
    // console.log(regis.id)
    const db1 = await openDB('db', 1, {
        upgrade(db) {
          db.createObjectStore('store1',{
              keyPath: 'key',
            autoIncrement:true
            });
        },
      });
  
    
    await db1.put('store1',{key: Number(regis.id),value: regis})
      .then(result => {
        console.log('success!', result);
      })
      .catch(err => {
        console.error('error: ', err);
      });
    db1.close()
  }
  export const dbi = async (props)=>{
    let cursor = await (await idb.db1).transaction('store1').store.openCursor();
    while(cursor){
      console.log(cursor.value.value);
      cursor = await cursor.continue();
    }
  }
  export const array = []
export const idb = {
  db1 : openDB('db',1)
}
// const mapstate=(state)=>{
//   console.log(state)
// }
// const mapdispatch = (dispatch) =>{
//   return{
//     get_it:(fil_val)=>{
//       dispatch(Get_It(fil_val))
//     }
//   }
// }
// connect(mapstate,mapdispatch)(dbi)