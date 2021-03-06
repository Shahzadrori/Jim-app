import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../style/Regis.css";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { Get_Pic, Take_It } from "../../Redux/Actinon";
import { Database } from "../DB/Db";
import moment from "moment";
import history from "../../history";
const Regis_form = (pare) => {
  const [inp_val, setinp_val] = useState({
    name: "",
    id: "",
    phone: "",
    age: "",
    pic: "",
    date: "",
    expdate: "",
  });

  function toasts() {
    toast.dark(`Jobs Done`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  let Info = [];
  const Submit = () => {
    var names = document.getElementById("names").value;
    var id = document.getElementById("id").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;

    if (names === "" || names === null) {
      toast.error("Name field should not be empty");
    // } else if ( names.length < 3) {
    //   toast.error("Name field should atleast contain 3 digits");
    // } else if (Number(names)) {
    //   toast.error("Name shoul contain alphabet letters");
    // } else if (id.length !== 13) {
    //   toast.error("ID Number should contain 13 digits");
    // } else if (phone.length !== 11) {
    //   toast.error("Phone Number should contain 11 digits");
    // } else if (age < 16) {
    //   toast.error("Age should be above sixteen");
    // } else if (
    //   document.getElementById("pic").value == "" ||
    //   document.getElementById("pic").value == null
    // ) {
    //   toast.error("Image field should not be empty");
    } else if(true){
      localStorage.setItem("formdata", true);
      toasts();
      Database(inp_val);
      setinp_val({
        name: "",
        id: "",
        phone: "",
        age: "",
      });
      document.getElementById("pic").value = "";
      history.push("/list");
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
          pic: allvalues.pic,
          date: allvalues.date,
          expdate: allvalues.expdate,
        };
      } else if (Names === "id") {
        return {
          name: allvalues.name,
          id: Values,
          phone: allvalues.phone,
          age: allvalues.age,
          pic: allvalues.pic,
          date: moment().format("DD-MM-YYYY"),
          expdate: null,
        };
      } else if (Names === "phone") {
        return {
          name: allvalues.name,
          id: allvalues.id,
          phone: Values,
          age: allvalues.age,
          pic: allvalues.pic,
          date: allvalues.date,
          expdate: allvalues.expdate,
        };
      } else if (Names === "age") {
        return {
          name: allvalues.name,
          id: allvalues.id,
          phone: allvalues.phone,
          age: Values,
          pic: allvalues.pic,
          date: allvalues.date,
          expdate: allvalues.expdate,
        };
      } else if (Names === "pic") {
        let file = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (e) => {
          Info.push(e.target.result);
        };
        return {
          name: allvalues.name,
          id: allvalues.id,
          phone: allvalues.phone,
          age: allvalues.age,
          date: allvalues.date,
          expdate: allvalues.expdate,
          pic: Info,
        };
      }
    });
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="main_regis">
      <div className='regis-disp'>
       <div className='cont_regis'>
        <div className="inner_regis">
          <h1>Login</h1>
          <label>Name :</label>
          <input
            name="names"
            value={inp_val.name}
            required
            onChange={Target_val}
            id="names"
            type="text"
            placeholder="Enter Your Name"
          />
          <label>ID :</label>
          <input
            name="id"
            value={inp_val.id}
            required
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
            required
            id="phone"
            type="Number"
            placeholder="Enter Your Phone Number"
          />
          <label>Age :</label>
          <input
            name="age"
            value={inp_val.age}
            onChange={Target_val}
            required
            id="age"
            type="text"
            placeholder="Enter Your Age in Numbers"
          />
          <label>Photo :</label>
          <input
            type="file"
            name="pic"
            required
            onChange={Target_val}
            id="pic"
          />
          <button type="submit" onClick={Submit}>
            Submit
          </button>
        </div>
        </div>
        </div>
        <div className="img_regis">
          <h1>Wise Saying :</h1>
          <h2>
            <q>
              HARD WORK BEATS TALENT
              <br />
              WHEN TALENT  DOESN'T  WORK HARD
            </q>
          </h2>
        </div>
        
      </div>
    </>
  );
};

const mapdispatchs = (dispatch) => {
  return {
    take_it: (tak) => {
      dispatch(Take_It(tak));
    },
    Pic_img: (img) => {
      dispatch(Get_Pic(img));
    },
  };
};
export default connect(null, mapdispatchs)(Regis_form);
