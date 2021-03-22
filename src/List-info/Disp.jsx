import React, { useState,useEffect } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Dexie from 'dexie';
import { Dataget } from "../Components/DB/Notes";
import Database from "../Components/DB/Db";

const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
    // Database.get().each(info => console.log(info))
    // Dataget()
  function ncards(item) {
    // console.log(item);
    // if (check(item.name) == true) {
      return (
        <List
          // imgsrc={item.imgsrc}
          Name={item.name}
          Id={item.id}
          Phone={item.phone}
          Age={item.age}
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
  // console.log(state.Areducer);
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
  };
};
export default connect(mapstate, mapdispatch)(Display);
// 2592000000 milli seconds in a month
