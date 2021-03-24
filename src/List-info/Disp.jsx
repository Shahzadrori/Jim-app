import React, { useState,useEffect } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Take_It } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Database, dbi, Get_it, idb } from "../Components/DB/Db";
import { openDB } from "idb";
const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
    useEffect(()=>{
      async function add(){
        try{
    
     
       await (await (idb.db1)).getAll('store1').then((res) =>{
         prep.take_it(res)
       })
      }catch (err){
        console.log('Error :' + err)
      }
    }
            add()
            dbi()
    },[])
    function data(item){
      // console.log(Object.values(item))
      // console.log(item)
    
    }
    data(prep.regis_items)
  // function ncards(item,index) {
  //   console.log(item)
  //   console.log(Number(index))
  //   console.log(Object.keys(item));
      // Object.keys(item).forEach(key =>{
      //   var val = item[key]
      //   console.log(val.value)
      // })

    // const valarr = Object.entries(item);
  //  valarr.forEach(([key,value])=>{
    //  console.log(value.value)
  //  var   arr = value.value
  //  console.log(arr)
  // var i = 0;
  // while(i <item.length){
  //  i++
  // }
  // console.log(i)
    // return(
    //   <List
    //         Name={item[index].value.name}
    //         Id = {item[index].value.id}
    //         Phone = {item[index].value.phone}
    //         Age= {item[index].value.age}
    //       />
    // )
    //  Dito(arr)
  //  })
  //  function Dito(arr){
  //   console.log(arr)
  //   return(
  //     <List
  //       Name={arr.name}
  //       Id = {arr.id}
  //       Phone = {arr.phone}
  //       Age= {arr.age}
  //     />
  //   )
  // }
      //  console.log(Object.entries(item))
    //  }
 
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
      {/* <div className="disp-main">{prep.regis_items.map(data)}</div> */}
      <div className="disp-main">{data}</div>
      {/* <div className="disp-main">{Data.map(ncards)}</div> */}
    </>
  );
};
const mapstate = (state) => {
  // console.log(state.Breducer);
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
