import React, { useState,useEffect } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Take_It } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Database, Get_it, idb } from "../Components/DB/Db";
import { openDB } from "idb";
const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
    useEffect(()=>{
      async function add(){
       await (await (idb.db1)).getAll('store1').then((res) =>{
         prep.take_it(res)
       })
      }
            add()
    },[])

  function ncards(item) {
    console.log(item.key)
    // for(var i = 0; i++; i >= item.length){
    //   console.log(item[i])
    // }
    // if (check(item.name) == true) {
      return (
        <List
          Name={item[0].value.name}
          Id={item[0].value.id}
          Phone={item[0].value.phone}
          Age={item[0].value.age}
        />
      );
    }

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
      <div className="disp-main">{prep.regis_items.map(ncards)}</div>
      {/* <div className="disp-main">{Data.map(ncards)}</div> */}
    </>
  );
};
const mapstate = (state) => {
  console.log(state.Breducer);
  return {
    card_item: state.Areducer,
    regis_items: state.Breducer,
  };
};
const mapdispatch = (dispatch) => {
  return {
    add_it: (inp_Data) => {
      dispatch(Add_It(inp_Data));
    },
    take_it: (regis_data)=>{
      dispatch(Take_It(regis_data))
    }
  };
};
export default connect(mapstate, mapdispatch)(Display);
// 2592000000 milli seconds in a month
