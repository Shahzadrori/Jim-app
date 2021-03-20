import Dexie from 'dexie';

async function Database(){
    const db = new Dexie('Database');
   await db.version(1).stores({notes: '++id'})
   await db.open()
   try{
     await db.notes.add(inp_val)
    // await db.notes.each(info => )
    toasts();
   }catch(error){
      alert('Same ID exist')
   }
   }

   export default Database;