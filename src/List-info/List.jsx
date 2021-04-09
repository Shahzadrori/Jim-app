import React, { createContext, useEffect, useState } from "react";
import "../style/List/List.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import IconButton from "@material-ui/core/IconButton";
import { openDB } from "idb";
import moment from "moment";
import Persona from "./Persona";
import { connect } from "react-redux";
import { Person_data } from "../Redux/Actinon";
import history from "../history";
const List = (props) => {
  const [style, setstyle] = useState({
    backgroundColor: "#ff7a00",
    height: "30px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    marginTop: "6px",
    paddingBottom: "7px",
  });
  const [num, setnum] = useState({
    month: "",
    amount: "",
  });
  const [stye, setsty] = useState({
    color: "black",
  });
  const [stl, setstl] = useState({
    display: "block",
  });
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
          setstl({
            display: "block",
          });
          setstyle({
            backgroundColor: "#c70039",
            height: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginTop: "6px",
            paddingBottom: "7px",
          });
        } else if (diff >= 24) {
          setstl({
            display: "none",
          });
          setsty({
            display: "none",
          });
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
  const Target = (eve) => {
    const value = eve.target.value;
    const Name = eve.target.name;
    setnum((allvalues) => {
      if (Name === "time-btn") {
        return {
          month: value,
          amount: allvalues.amount,
        };
      } else if (Name === "amount") {
        return {
          month: allvalues.month,
          amount: value,
        };
      }
    });
  };
  async function set() {
    const db1 = await openDB("db", 1);
    await db1.put("store1", {
      id: Number(props.Id),
      value: {
        paydate: moment().format("DD-MM-YYYY"),
        expdate: moment().add(1, "month").format("DD-MM-YYYY"),
        amount: 25000,
        date: props.Time,
        age: props.Age,
        name: props.Name,
        phone: props.Phone,
        id: props.Id,
        pic: props.Img,
      },
    });
    window.location.reload();
  }
  function repaid() {
    document.getElementById(props.Phone).classList.toggle("none");
  }
  const person = async () => {
    const db1 = await openDB("db", 1);
    await db1
      .get("store1", Number(props.Id))
      .then(async (result) => {
        props.pers(result.value);
        history.push("/persona");
      })
      .catch((err) => console.log(err));
  };

  const Done = async () => {
    const db1 = await openDB("db", 1);
    await db1
      .get("store1", Number(props.Id))
      .then(async (result) => {
        await db1.put("store1", {
          id: Number(props.Id),
          value: {
            paydate: moment().format("DD-MM-YYYY"),
            expdate: moment()
              .add(Number(num.month), "months")
              .format("DD-MM-YYYY"),
            date: props.Time,
            amount: Number(num.amount),
            age: props.Age,
            name: props.Name,
            phone: props.Phone,
            id: props.Id,
            pic: props.Img,
          },
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="list-main" key={props.Index}>
      <div className="list-wrapper" key={props.Index}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4oKc96JbLOhTiCy5nL_o_35CZpvq2pOI1w&usqp=CAU" />
        <div className="content">
          <DeleteIcon id={props.Id} className="btn-del" onClick={del} />
          <img src={props.Img} className="Pers-img" />
          <div id={props.Phone} className="dis-content none">
            <input
              id={props.Index}
              type="number"
              onKeyUp={Target}
              className="add-btn"
              name="time-btn"
              placeholder="Enter Months"
            />
            <button className="done-btn" onClick={Done}>
              Done
            </button>
            <button className="cancel-btn" onClick={repaid}>
              Cancel
            </button>
            <input
              id={props.Unik}
              type="number"
              onKeyUp={Target}
              className="amount"
              name="amount"
              placeholder="Enter Amount"
            />
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
          <button onClick={set} style={stye} className="paid-btn">
            Paid
          </button>
          <button
            id="res-btn"
            onClick={repaid}
            style={stl}
            className="paid-btn"
          >
            Advance
          </button>
          <button className="paid-btn" onClick={person}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const mapstate = (state) => {
  console.table(state);
  return {
    person_item: state.Ereducer,
  };
};
const mapdispatch = (dispatch) => {
  return {
    pers: (pers_info) => {
      dispatch(Person_data(pers_info));
    },
  };
};
export default connect(mapstate, mapdispatch)(List);
