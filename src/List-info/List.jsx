import React, { useState } from "react";
import { useEffect } from "react";
import "../style/List/List.css";
import DeleteIcon from '@material-ui/icons/Delete';
import del from '../Components/DB/Db'
import { openDB } from "idb";
const List = (props) => {
  const [flag,setflag] = useState(false);
  const [tag,settag] = useState(false)
  const Dates = new Date();
  const date = Dates.getDate();
  useEffect(()=>{
    if(
      date == 25
      ){
      function start(){
       get_start =  setTimeout(
          function(){
            setflag(true)
          })}
          start()
        }
  },[])
  var get_start;
      function fot(){
        clearTimeout(get_start);
        setflag(false)
      }
  async function del() {
    window.location.reload()
    const db = await openDB('db',1)
    return await db.delete('store1',Number(props.Id));
    }

  return (
    <div className="list-main">
      <div className="list-wrapper" key={Math.random()}>
      <DeleteIcon className='btn-del' onClick={del}/>
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
