import React, { useEffect, useState } from "react";
import "../style/List/List.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { openDB } from "idb";
import moment from "moment";
const List = (props) => {
  const [style, setstyle] = useState({});
  const [mnvalue, setmnvalue] = useState();
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
        let expdate = moment(result.value.expdate, "DD-MM-YYYY");
        let presentdate = moment();
        let diff = expdate.diff(presentdate, "days");
        if (diff == 0 || diff <= 5) {
          setstyle({
            backgroundColor: "red",
            height: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginTop: "6px",
            paddingBottom: "7px",
          });
        } else if (diff >= 24) {
          setstyle({
            backgroundColor: "green",
            height: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            paddingBottom: "7px",
            marginTop: "6px",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  async function set() {
    const db1 = await openDB("db", 1);
    await db1.put("store1", {
      id: Number(props.Id),
      value: {
        paydate: moment().format("DD-MM-YYYY"),
        expdate: moment().add(1, "month").format("DD-MM-YYYY"),
        age: props.Age,
        name: props.Name,
        phone: props.Phone,
        id: props.Id,
        pic: props.Img,
        date: props.Time,
      },
    });

    window.location.reload();
  }
  function repaid() {
    var x = document.getElementById(props.Phone);
     x.classList.toggle("none");
  }
  const Done = async () => {
    const db1 = await openDB("db", 1);
    await db1.put("store1", {
      id: Number(props.Id),
      value: {
        paydate: moment().format("DD-MM-YYYY"),
        expdate: moment().add(mnvalue, "month").format("DD-MM-YYYY"),
        age: props.Age,
        name: props.Name,
        phone: props.Phone,
        id: props.Id,
        pic: props.Img,
        date: props.Time,
      },
    });
    window.location.reload();
  };
  const Target =(eve)=>{
       const value = eve.target.value
       setmnvalue(value)
  }
  return (
    <div className="list-main">
      <div className="list-wrapper" key={Math.random()}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4oKc96JbLOhTiCy5nL_o_35CZpvq2pOI1w&usqp=CAU" />
        <div className="content">
          <DeleteIcon id={props.Id} className="btn-del" onClick={del} />
          <img src={props.Img} className="Pers-img" />
          <div id={props.Phone} className="dis-content none">
            <input
              id={props.Phone}
              type="Number"
              value={mnvalue}
              onChange={Target}
            />
            <button onClick={Done}>Done</button>
            <button onClick={repaid}>Cancel</button>
          </div>
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
          <button onClick={set} className="paid-btn">
            Paid
          </button>
          <button onClick={repaid} className="paid-btn">
            Repaid
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
