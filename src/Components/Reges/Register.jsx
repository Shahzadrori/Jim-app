import React from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "../../style/Regis.css";
import "react-toastify/dist/ReactToastify.css";

const Regis_form = () => {
  function toasts() {
    toast.success("Jobs Done");
    toast.dark('New Registration', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

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
          <input type="text" placeholder="Enter Your Name" />
          <label>ID :</label>
          <input type="Number" placeholder="Enter Your ID Card Number" />
          <label>Phone :</label>
          <input type="Number" placeholder="Enter Your Phone Number" />
          <label>Age :</label>
          <input type="text" placeholder="Enter Your Age in Numbers" />
          <button onClick={toasts}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Regis_form;
