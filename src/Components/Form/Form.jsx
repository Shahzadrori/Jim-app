import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/form.css";
import { useState } from "react";
import { connect } from "react-redux";
import { Allow } from "../Redux/Action";

const Form = (propes) => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [check, setcheck] = useState(false);
  const Check = () => {
    setcheck(true);
  };
  const Sub = (e) => {
    e.preventDefault();

    var fst = document.getElementById("fName").value;
    var snd = document.getElementById("lName").value;
    var trd = document.getElementById("Email").value;
    var furt = document.getElementById("Pass").value;
    let atposition = trd.indexOf("@");
    let dotposition = trd.lastIndexOf(".");
    if (fst == null || fst == "" || fst.length < 4) {
      alert("First name can not be blanked and should have atleast 4 digits");
    } else if (snd == null || snd == "" || snd.length < 4) {
      alert("Last name can not be blanked and should have atleast 4 digits");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= trd.length
    ) {
      alert(
        "Please enter valid email address"
        //  at position: "
        // +
        //   atposition +
        //   "dotposition " +
        //   dotposition
      );
    } else if (furt.length < 6) {
      alert("Password must contain atleast 6 digits");
    } else {
      setcheck(true);
      Dispatchdata();
    var storage =   localStorage.setItem("formdata", JSON.stringify(data));
    propes.addtask(storage);
    }
  };

  function Dispatchdata() {
    if (localStorage.getItem("formdata")) {
      const { fname, lname, email, password } = JSON.parse(
        localStorage.getItem("formdata")
      );
      propes.addtask({ fname, lname, email, password });
      console.log(`${fname} and ${lname} and ${email} and ${password}`);
    }
  }
  const targetval = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setdata((prevalue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
          email: prevalue.email,
          password: prevalue.password,
        };
      } else if (name === "lname") {
        return {
          fname: prevalue.fname,
          lname: value,
          email: prevalue.email,
          password: prevalue.password,
        };
      } else if (name === "email") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: value,
          password: prevalue.password,
        };
      } else if (name === "password") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: prevalue.email,
          password: value,
        };
      }
    });
  };

  return (
    <>
      <div className="outer">
        <form action="/action_page.php" autoComplete="on" onSubmit={Sub}>
          {!check ? (
            <div id="mains" className="inner">
              <Link to="/">
                <i className="fas fa-times" />
              </Link>
              <h1 className="top">Login</h1>
              <label>First Name</label>
              <input
                id="fName"
                value={data.fname}
                onChange={targetval}
                className="inp"
                name="fname"
                type="text"
                placeholder="Enter your first name"
              />
              <label>Last Name</label>
              <input
                id="lName"
                value={data.lname}
                onChange={targetval}
                className="inp"
                name="lname"
                type="text"
                placeholder="Enter your last name"
              />
              <label>Email</label>
              <input
                id="Email"
                value={data.email}
                onChange={targetval}
                className="inp"
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                id="Pass"
                value={data.password}
                onChange={targetval}
                className="inp"
                name="password"
                type="password"
                placeholder="Enter the password"
              />
              <div className="btns">
                <button id='go-btn' type="submit" className="sub-btn">
                  Submit
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};


export default Form;