import React, { useState, useEffect } from "react";
import List from "./List";
import "../style/List/Disp.css";
import { connect } from "react-redux";
import { Add_It, Get_It, Take_It, Get_Pic } from "../Redux/Actinon";
import "react-toastify/dist/ReactToastify.css";
import { idb } from "../Components/DB/Db";
import moment from "moment";
const Display = (props) => {
  const [inp_Data, setinp_Data] = useState();
  useEffect(() => {
    dbi();
  }, []);
  const dbi = async () => {
    let cursor = await (await idb.db1).transaction("store1").store.openCursor();
    while (cursor) {
      await props.get_data(cursor.value.value);
     await props.Pic_it(cursor.value.value);
      cursor = await cursor.continue();
    }
  };

  function ncards(item, index) {
    let expdate = moment(item.expdate, "DD-MM-YYYY");
    let presentdate = moment();
    let diff = -presentdate.diff(expdate, "days");
    if (check(item.name) == true) {
      if (diff >  5) {
      return (
        <List
          Unik={Math.random() * 1000}
          Index={index}
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
    } else {
      return null;
    }
  }
  function filter(item) {
    let expdate = moment(item.expdate, "DD-MM-YYYY");
    let presentdate = moment();
    let diff = -presentdate.diff(expdate, "days");
    if (diff <= 5) {
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
      }
    } else {
      return null;
    }
  }
  function check(cardname) {
    var value = cardname.indexOf(props.card_item) > -1;
    return value;
  }
  function get_it() {
    props.add_it(inp_Data);
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
      <div className="fil-div">{props.Pic_data.map(filter)}</div>
      <div className="disp-main">{props.filte_data.map(ncards)}</div>
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
