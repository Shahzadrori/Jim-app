import React from "react";
import "../style/List/List.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { openDB } from "idb";
import moment from "moment";
const List = (props) => {
  async function del() {
    window.location.reload();
    const db = await openDB("db", 1);
    return await db.delete("store1", Number(props.Id));
  }
  const Pay = async ()=> {
    const db1 = await openDB("db", 1);
     await db1.get('store1',Number(props.Id)).then(
     (result) => {
      //  let data = 0
      console.log(result)
     }
    ).catch((err)=> console.log(err))
  }
// }
  // console.log(props.Id)
  async function set() {
    const db1 = await openDB("db", 1);
    return db1.put("store1", {
      id: Number(props.Id),
      value: {
        paydate: moment().format("DD-MM-YYYY"),
        age: props.Age,
        name: props.Name,
        phone: props.Phone,
        id: props.Id,
        pic: props.Img,
        date: props.Time,
      },
    });
    
  }
  return (
    <div className="list-main">
      <div className="list-wrapper" key={Math.random()}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4oKc96JbLOhTiCy5nL_o_35CZpvq2pOI1w&usqp=CAU" />
        <div className="content">
          <DeleteIcon id={props.Id} className="btn-del" onClick={del} />
          <img src={props.Img} className="Pers-img" />
        </div>
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
        {/* <div className='warn' style = {{display: flag ? 'flex' :'none'}} > */}
        <button onClick={set}>Paid</button>
        <button onClick={Pay}>Pay</button>
      </div>
    </div>
    // </div>
  );
};
export default List;
