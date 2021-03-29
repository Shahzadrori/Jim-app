import React, { useState,useEffect } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Get_It, Take_It ,Get_Pic} from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Database, dbi, Get_it, idb } from "../Components/DB/Db";
import { openDB } from "idb";
// import {toast} from 'react-toastify'
const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
    useEffect(()=>{
            dbi()
            // pics()
    },[])
  
    const dbi = async ()=>{
      let cursor = await (await idb.db1).transaction('store1').store.openCursor();
      while(cursor){
        await prep.get_data(cursor.value.value)
        cursor = await cursor.continue();
      }

    }
  // const pics = async ()=>{
  //   const pic_db = await openDB('Pic',1);
  //          let cursor = await (await pic_db).transaction('Pic-store').store.openCursor();
  //       while(cursor){
  //         // console.table(cursor.value.value);
  //         prep.Pic_it(cursor.value.value)
  //         cursor = await cursor.continue();
        
  //       }
  // }
   function ncards(item){
      if (check(item.name) == true) {
     return(
       <List
         Img={item.pic}
         Name={item.name}
         Id = {item.id}
        Phone = {item.phone}
         Age = {item.age}
       />
     )
    }else{
       return null
     }
   }

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
          onKeyUp={get_it}
        />
      </div>
      <div className="disp-main">{prep.filte_data.map(ncards)}
      </div>
      
    </>
  );
};
const mapstate = (state) => {
  console.table(state)
  return {
    card_item: state.Areducer,
    regis_items: state.Breducer,
    filte_data:state.Creducer,
    Pic_data:state.Dreducer
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
    },
    Pic_it:(Img)=>{
      dispatch(Get_Pic(Img))
    }
  };
};
export default connect(mapstate, mapdispatch)(Display);
// 2592000000 milli seconds in a month
