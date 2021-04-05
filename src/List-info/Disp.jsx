import React, { useState, useEffect } from "react";
import List from "./List";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Get_It, Take_It, Get_Pic } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { idb } from "../Components/DB/Db";
import {openDB} from 'idb'
const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
  useEffect(() => {
    dbi()
  }, [])
  const dbi = async () =>{
    let cursor = await (await idb.db1).transaction("store1").store.openCursor();
    while (cursor) {
      await prep.get_data(cursor.value.value);
      cursor = await cursor.continue();
    }
  };
  function ncards(item) {
    if (check(item.name) == true) {
      return (
        <List
          Time={item.date}
          Img={item.pic}
          Name={item.name}
          Id={item.id}
          Phone={item.phone}
          Age={item.age}
        />
      );
    } else {
      return null;
    }
  }
  function check(cardname) {
    var value = cardname.indexOf(prep.card_item) > -1;
    return value;
  }
  function get_it() {
    prep.add_it(inp_Data);
  }
  console.log(prep.filte_dat)
  function filter(item){

  }
  filter()
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
      <div
     style={{
        backgroundColor:"green",
        widht:"100%",
        height:"30vh"
      }}>
      </div>
      <div className="disp-main">{prep.filte_data.map(ncards)}</div>
    </>
  );
};
const mapstate = (state) => {
  return {
    card_item: state.Areducer,
    regis_items: state.Breducer,
    filte_data: state.Creducer,
    Pic_data: state.Dreducer,
  };
};
const mapdispatch = (dispatch) => {
  return {
    add_it: (inp_Data) => {
      dispatch(Add_It(inp_Data));
    },
    take_it: (regis_data) => {
      dispatch(Take_It(regis_data));
    },
    get_data: (filter_data) => {
      dispatch(Get_It(filter_data));
    },
    Pic_it: (Img) => {
      dispatch(Get_Pic(Img));
    },
  };
};
export default connect(mapstate, mapdispatch)(Display);
