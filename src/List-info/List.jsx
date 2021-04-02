import React, { useEffect, useState } from "react";
import "../style/List/List.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { openDB } from "idb";
import moment from "moment";
const List = (props) => {
  const [style, setstyle] = useState({});
  useEffect(() => {
    Pay();
  }, []);
  async function del() {
    window.location.reload();
    const db = await openDB("db", 1);
    return await db.delete("store1", Number(props.Id));
  }
  const Pay = async () => {
    const db1 = await openDB("db", 1);
    await db1
      .get("store1", Number(props.Id))
      .then((result) => {
        console.log(result.value);
        let paydate = moment(result.value.paydate, "DD-MM-YYYY");
        let presentdate = moment();
        let diff = presentdate.diff(paydate, "days");
       let duedate = result.value.duedays - diff
       console.log(duedate)
        if (duedate == 0 || duedate<=5 ) {
          setstyle({
            backgroundColor: "red",
            height: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          });
        }else if(duedate >= 24){
          setstyle({
            backgroundColor: "green",
            height: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            paddingBottom:'7px',
            marginTop:"6px"
          })
        }
      })
      .catch((err) => console.log(err));
  };
  async function set() {
    console.log(props)
    const db1 = await openDB("db", 1);
    await db1.put("store1", {
      id: Number(props.Id),
      value: {
        duedays:30,
        paydate: moment().format("DD-MM-YYYY"),
        age: props.Age,
        name: props.Name,
        phone: props.Phone,
        id: props.Id,
        pic: props.Img,
        date: props.Time,
      } 
    });
    // window.location.reload();
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
        <div id="warn" style={style}>
          <button
            onClick={set} className='paid-btn'>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
