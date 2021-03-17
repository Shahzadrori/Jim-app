import React from "react";
import "../style/List/List.css";

const List = (props) => {
  return (
    <div className="list-main">
      <div className="list-wrapper" key={Math.random()}>
        <img src={props.imgsrc} />
        <div className="list-wrap">
          <div className="list-txt">
            <h2>Name :</h2>
            <h3>ID :</h3>
            <h3>Phone :</h3>
            <h3>Age :</h3>
          </div>
          <div className="list-cont">
          <h3>{props.Name}</h3>
            <h3>{props.Id}</h3>
            <h3>{props.Phone}</h3>
            <h3>{props.Age}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
