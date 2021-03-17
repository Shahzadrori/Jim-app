import React from "react";
import List from "./List";
import Data from "../Data.js";
import '../style/List/Disp.css'
const Display = () => {
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
  // console.log(<Data/>)
  return (
    <>
      <div className="disp-main">{Data.map(ncards)}</div>
    </>
  );
};

export default Display;
