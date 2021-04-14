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
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
// const req =  require("react-bootstrap/ModalHeader");
import "react-bootstrap/ModalHeader";
const List = (props) => {
  const [style, setstyle] = useState({
    // backgroundColor: "#ff7a00",
    // height: "30px",
    // borderBottomLeftRadius: "20px",
    // borderBottomRightRadius: "20px",
    // marginTop: "6px",
    // paddingBottom: "7px",
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
  const [stle, setstle] = useState({
    display: "none",
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    Pay();
  }, []);
  async function del() {
    window.location.reload();
    setShow(false);
    const db = await openDB("db-data", 1);
    return await db.delete("store1", Number(props.Id));
  }
  const Pay = async () => {
    const db1 = await openDB("db-data", 1);
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
            height: "35px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            paddingBottom: "7px",
            marginTop: "6px",
          });
        } else if (diff >= 24) {
          setstle({
            display: "block",
          });
          setstl({
            display: "none",
          });
          setsty({
            display: "none",
          });
          setstyle({
            backgroundColor: "green",
            height: "35px",
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
    const db1 = await openDB("db-data", 1);
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
    const db1 = await openDB("db-data", 1);
    await db1
      .get("store1", Number(props.Id))
      .then(async (result) => {
        props.pers(result.value);
        history.push("/persona");
      })
      .catch((err) => console.log(err));
  };

  const Done = async () => {
    const db1 = await openDB("db-data", 1);
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
  const Edit = async () => {
    const db1 = await openDB("db-data", 1);
    await db1
      .get("store1", Number(props.Id))
      .then(async (result) => {
        props.pers(result.value);
        history.push("/edit");
      })
      .catch((err) => console.log(err));
  };
  function Example() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button className="dels-btn" variant="primary" onClick={handleShow}>
          <DeleteIcon />
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sure! You want to delete it</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={del}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return (
    <div className="list-main" key={props.Index}>
      <div className="list-wrapper" key={props.Index}>
        <div className="img-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4oKc96JbLOhTiCy5nL_o_35CZpvq2pOI1w&usqp=CAU" />
        </div>
        <div className="content">
          {/* <DeleteIcon id={props.Id} className="btn-del" onClick={del} /> */}
          {Example()}
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
            <h4>Name :</h4>
            <h4>ID :</h4>
            <h4>Phone :</h4>
            <h4>Age :</h4>
          </div>
          <div className="list-cont">
            <h4>{props.Name}</h4>
            <h4>{props.Id}</h4>
            <h4>{props.Phone}</h4>
            <h4>{props.Age}</h4>
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
          <button style={stle} className="paid-btn" onClick={Edit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapstate = (state) => {
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
