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
     await db.notes.add(regis_value);
   }catch (error){
       alert('Same id exists' + error)
   }
// return    console.log(  await db.notes.each((res=> console.log(res))))

// if (!window.indexedDB) {
//     console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
// }
// // var request = window.indexedDB.open("MyTestDatabase", 3);
// // request.onerror = function(event) {
// //     // Do something with request.errorCode!
// //     alert(event)
// //   };
// //   request.onsuccess = function(event) {
// //     // Do something with request.result!
// //     alert(event + 'success')
// //   };
// // var db;
// // var request = indexedDB.open("MyTestDatabase");
// // request.onerror = function(event) {
// //   console.log("Why didn't you allow my web app to use IndexedDB?!");
// // };
// // request.onsuccess = function(event) {
// //   db = event.target.result;
// // };
// const customerData = [
//     { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
//     { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
//   ];

// const dbName = "the_name";

// var request = indexedDB.open(dbName, 1);

// request.onerror = function(event) {
//   // Handle errors.
// };
// request.onupgradeneeded = function(event,index) {
//   var db = event.target.result;

//   // Create an objectStore to hold information about our customers. We're
//   // going to use "ssn" as our key path because it's guaranteed to be
//   // unique - or at least that's what I was told during the kickoff meeting.
//   var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

//   // Create an index to search customers by name. We may have duplicates
//   // so we can't use a unique index.
//   objectStore.createIndex("name", "name", { unique: false });

//   // Create an index to search customers by email. We want to ensure that
//   // no two customers have the same email, so use a unique index.
//   objectStore.createIndex("email", index, { unique: true });

//   // Use transaction oncomplete to make sure the objectStore creation is
//   // finished before adding data into it.
//   objectStore.transaction.oncomplete = function(event) {
//     // Store values in the newly created objectStore.
//     var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
//     customerData.forEach(function(customer) {
//       customerObjectStore.add(customer);
//     });
//   };
// };





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
export default  Database