import React, { useState } from "react";
import "../style/List/List.css";

const List = (props) => {
  
  const [flag,setflag] = useState(false);
  function fot(){
    setflag(false)
  }
   setTimeout(
        function(){
          setflag(true)
        },1000
        // 2628288000
        // 2592000000
  )

  return (
    <div className="list-main">
      <div className="list-wrapper" key={Math.random()}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4oKc96JbLOhTiCy5nL_o_35CZpvq2pOI1w&usqp=CAU' />
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
        <div className='warn' style = {{display: flag ? 'flex' :'none'}} >
          <button onClick={fot}>Paid</button>
       </div>
      </div>
    </div>
  );
};

export default List;
