import React, { useState } from "react";
import List from "./List";
import Data from "../Data.js";
import "../style/List/Disp.css";
import { connect } from "react-redux";
const Display = () => {
  const [inp_Data, setinp_Data] = useState();
  function ncards(item) {
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
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setinp_Data(e.target.value)}
      />
      <div className="disp-main">{Data.map(ncards)}</div>
    </>
  );
};
const mapstate=(state)=>{
   return{

   }
}
const mapdispatch=(dispatch)=>{
   return{
    
   }
}
export default connect(mapstate, mapdispatch)(Display);
