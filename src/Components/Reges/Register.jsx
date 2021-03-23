import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../style/Regis.css";
import "react-toastify/dist/ReactToastify.css";
import { openDB } from "idb";
import { connect } from "react-redux";
import { Take_It } from "../../Redux/Actinon";
import Dexie from 'dexie'
import {Database, Get_it} from "../DB/Db";
const Regis_form = (pare) => {
  const [inp_val, setinp_val] = useState({
    name: "",
    id: "",
    phone: "",
    age: "",
  });
  // useEffect(()=>{
  // })

   function toasts() {
    toast.dark(`Jobs Done`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  const Submit = async () => {
    var names = document.getElementById("names").value;
    var id = document.getElementById("id").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;

    if (names === "" || names === null) {
      toast.error("Name field should not be empty");
    // } else if (names.length === 4 || names.length < 4) {
    //   toast.error("Name field should atleast contain 4 digits");
    // } else if (Number(names)) {
    //   toast.error("Name shoul contain alphabet letters");
    // } else if (id.length !== 13) {
    //   toast.error("ID Number should be equal to 13");
    // } else if (phone.length !== 11) {
    //   toast.error("Phone Number should contain 11 digits");
    // } else if (age < 16) {
    //   toast.error("Age should be above sixteen");
    } else {
      console.log('Done')
      Database(inp_val)

    }
  };

  const Target_val = (event) => {
    let Values = event.target.value;
    let Names = event.target.name;

    setinp_val((allvalues) => {
      if (Names === "names") {
        return {
          name: Values,
          id: allvalues.id,
          phone: allvalues.phone,
          age: allvalues.age,
        };
      } else if (Names === "id") {
        return {
          name: allvalues.name,
          id: Values,
          phone: allvalues.phone,
          age: allvalues.age,
        };
      } else if (Names === "phone") {
        return {
          name: allvalues.name,
          id: allvalues.id,
          phone: Values,
          age: allvalues.age,
        };
      } else if (Names === "age") {
        return {
          name: allvalues.name,
          id: allvalues.id,
          phone: allvalues.phone,
          age: Values,
        };
      }
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="main_regis">
        <div className="inner_regis">
          <h1>Login</h1>
          <label>Name :</label>
          <input
            name="names"
            value={inp_val.name}
            onChange={Target_val}
            id="names"
            type="text"
            placeholder="Enter Your Name"
          />
          <label>ID :</label>
          <input
            name="id"
            value={inp_val.id}
            onChange={Target_val}
            id="id"
            type="Number"
            placeholder="Enter Your ID Card Number"
          />
          <label>Phone :</label>
          <input
            name="phone"
            value={inp_val.phone}
            onChange={Target_val}
            id="phone"
            type="Number"
            placeholder="Enter Your Phone Number"
          />
          <label>Age :</label>
          <input
            name="age"
            value={inp_val.age}
            onChange={Target_val}
            id="age"
            type="text"
            placeholder="Enter Your Age in Numbers"
          />
          <button onClick={Submit}>Submit</button>
        </div>
        <div className="img_regis">
          <h1>Muhammad Ali </h1>
          <h2>
            <q>
              DON'T COUNT THE DAYS;
              <br />
              MAKE THE DAYS COUNT
            </q>
          </h2>
        </div>
      </div>
    </>
  );
};

const mapstates = (state) =>{
  console.log(state)
  return{
    values:state.Breducer
  }
}
const mapdispatchs = (dispatch)=>{
  return{
    take_it:(tak)=>{
     dispatch(Take_It(tak))
    }
  }
}
export default connect(mapstates,mapdispatchs)(Regis_form);
