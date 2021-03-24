import React, { useState,useEffect } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Get_It, Take_It } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Database, dbi, Get_it, idb } from "../Components/DB/Db";
import { openDB } from "idb";
const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
  const [isload,setisload] = useState(false)
    useEffect(()=>{

            dbi()
    },[])
  
    const dbi = async ()=>{
      let cursor = await (await idb.db1).transaction('store1').store.openCursor();
      while(cursor){
        // console.log(cursor.value.value);
        await prep.get_data(cursor.value.value)
        cursor = await cursor.continue();
      }
    }

   function ncards(item){
    //  console.log(item)
     return(
       <List
         Name={item.name}
         Id = {item.id}
        Phone = {item.phone}
         Age = {item.age}
       />
     )
   }
 
    // if (check(item.name) == true) {

    // return null;
  // }
  function check(cardname) {
    var value = 
    cardname.indexOf(prep.card_item) > -1;
    return value;
  }
  function get_it() {
    prep.add_it(inp_Data);
  }
  return (
    <>
      <div className="disp-top">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setinp_Data(e.target.value)}
          onKeyPress={get_it}
        />
      </div>
      <div className="disp-main">{prep.filte_data.map(ncards)}</div>
      {/* <div className="disp-main">{Data.map(ncards)}</div> */}
    </>
  );
};
const mapstate = (state) => {
  console.log(state.Creducer);
  return {
    card_item: state.Areducer,
    regis_items: state.Breducer,
    filte_data:state.Creducer
  };
};
const mapdispatch = (dispatch) => {
  return {
    add_it: (inp_Data) => {
      dispatch(Add_It(inp_Data));
    },
    take_it: (regis_data)=>{
      dispatch(Take_It(regis_data))
    },
    get_data:(filter_data)=>{
     dispatch(Get_It(filter_data))
    }
  };
};
export default connect(mapstate, mapdispatch)(Display);
// 2592000000 milli seconds in a month
