import React from "react";
import { ToastContainer } from "react-toastify";
import "../../style/Regis.css";

const Regis_form = () => {
  return (
    <>
      <div className="main_regis">
        <div className="inner_regis">
          <h1>Login</h1>
          <label>Name :</label>
          <input type="text" placeholder="Enter Your Name" />
          <label>ID :</label>
          <input type="Number" placeholder="Enter Your ID Card Number" />
          <label>Phone :</label>
          <input type="Number" placeholder="Enter Your Phone Numbert" />
          <label>Age :</label>
          <input type="text" placeholder="Enter Your Age in Numbers" />
        </div>

         
      </div>
    </>
  );
};

export default Regis_form;
