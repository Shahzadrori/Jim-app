import Dexie from 'dexie';
import { connect } from 'react-redux';
import { Take_It } from '../../Redux/Actinon';

const  Database = async (regis_value)=>{
    // console.log(regis_value)
//   async  function Dataphase(){
    const db = new Dexie('Database');
   await db.version(1).stores({notes: '++id'})
   await db.open()
   try{
     await db.notes.add(regis_value)
//     // await db.notes.each(info => )
//     // toasts();
   }catch(error){
      alert('Same ID exist')
   }
   }
// }
//  const mapstatess = (state)=>{
//      console.log(state)
//  }
//  const mapdispatches = (dispatche)=>{
//      return{
//          add_that:()=>{
//              dispatche(Take_It())
//          }
//             }
//         }
//    export default connect(mapstatess,mapdispatches)(Database);
export default Database