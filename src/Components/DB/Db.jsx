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
      // let cursor = await db1.transaction('store1').store.openCursor();
      // while(cursor){
      //   console.log(cursor.value,cursor.key);
      //   cursor = await cursor.continue();
      // }
      // let tx = db1.transaction('store1').store;
      // console.log(tx.store)
      // for  (const cursor of tx){
      //   console.log(cursor.value)
      // }
    
    await db1.put('store1',{key: Number(regis.id),value: regis})
      .then(result => {
        console.log('success!', result);
      })
      .catch(err => {
        console.error('error: ', err);
      });
    db1.close()
  }

export const idb = {
  db1 : openDB('db',1)
}
const mapstate=(state)=>{
  console.log(state)
}
const mapdispatch = (dispatch) =>{
  return{
    get_it:(fil_val)=>{
      dispatch(Get_It(fil_val))
    }
  }
}
connect(mapstate,mapdispatch)(Database)