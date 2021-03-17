import React, { useState } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Display = (prep) => {
  const [inp_Data, setinp_Data] = useState();
  function ncards(item, index) {
    if (check(item.Name)) {
      return (
        <List
          imgsrc={item.imgsrc}
          Name={item.Name}
          Id={item.Id}
          Phone={item.Phone}
          Age={item.Age}
        />
      );
    }
    return null;
  }
  function check(cardname) {
    return cardname.includes(prep.card_item)
  }
  function get_it() {
    prep.add_it(inp_Data);
  }
  return (
    <>
    <div className='disp-top'>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setinp_Data(e.target.value)}
        onKeyUp={get_it}
      />
      </div>
      <div className="disp-main">{Data.map(ncards)}</div>
    </>
  );
};
const mapstate = (state) => {
  return {
    card_item: state.card_item,
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