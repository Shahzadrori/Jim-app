import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import "../style/Regis.css";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "../style/List/Edit.css";
import { openDB } from "idb";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button'
const Edit = (props) => {
  const [inp_val, setinp_val] = useState({
    name: "",
    id: "",
    phone: "",
    age: "",
    pic: "",
    date: "",
    expdate: "",
  });
  let Info = [];
  let video = [];
  function back(){
    window.location.href = '/list'
}
  const Target = (event) => {
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
        let file = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (e) => {
          video.push(e.target.result);
        };
        return {
          name: allvalues.name,
          id: video,
          phone: allvalues.phone,
          age: allvalues.age,
          date: allvalues.date,
          expdate: allvalues.expdate,
          pic: allvalues.pic,
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
  const Submit = async () => {
    var names = document.getElementById("names").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    if (names === "" || names === null) {
     alert("Name field should not be empty");
    // } else if (names.length === 4 || names.length < 4) {
    //  alert("Name field should atleast contain 4 digits");
    // } else if (Number(names)) {
    //  alert("Name shoul contain alphabet letters");
    // } else if (phone.length !== 11) {
    //  alert("Phone Number should contain 11 digits");
    // } else if (age < 16) {
    //  alert("Age should be above sixteen");
    // } else if (
    //   document.getElementById("pic").value == "" ||
    //   document.getElementById("pic").value == null
    // ) {
    //   alert("Image field should not be empty");
    } else {
      const db1 = await openDB("db-data", 1);
      await db1
        .get("store1", Number(props.data[0].id))
        .then(async (result) => {
          console.log(result);
          await db1.put("store1", {
            id: Number(props.data[0].id),
            value: {
              paydate: props.data[0].paydate,
              expdate: props.data[0].expdate,
              date: props.data[0].date,
              amount: props.data[0].amount,
              age: inp_val.age,
              name: inp_val.name,
              phone: inp_val.phone,
              id: props.data[0].id,
              pic: inp_val.pic,
              vid: inp_val.id,
            },
          });
          setinp_val({
            name: "",
            id: "",
            phone: "",
            age: "",
            pic: "",
            date: "",
            expdate: "",
          })
            window.location.href = '/list'
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="edit-outer">
      
     <Button onClick={back} style={{
       marginTop:'-500px',
      position:'absolute',
       marginLeft:'-1000px'
     }} variant="contained" className="back-btn">  <ArrowBackIosIcon /> Back</Button>
        <form className="form-container" onSubmit={(e) => e.preventDefault()} style={{
          position:'relative'
        }}>
           
          <div className="inner_edit">
         
          <h1>Edit</h1>
            <label>Name :</label>
            <input
              name="names"
              value={inp_val.name}
              onChange={Target}
              id="names"
              type="text"
              placeholder={props.data[0].name}
            />

            <label>Phone :</label>
            <input
              name="phone"
              value={inp_val.phone}
              onChange={Target}
              id="phone"
              type="number"
              placeholder={props.data[0].phone}
            />
            <label>Age :</label>
            <input
              name="age"
              value={inp_val.age}
              onChange={Target}
              id="age"
              type="text"
              placeholder={props.data[0].age}
            />
            {/* <label>Video :</label>
            <input name="id" onChange={Target} id="id" type="file" /> */}
            
            <label>Photo :</label>
            <input type="file" name="pic" onChange={Target} id="pic" />
            <label>Height :</label>
            <input type="text" name="height" onChange={Target} id="height" placeholder='Enter Height' />
            <label>Weight :</label>
            <input type="text" name="weight" onChange={Target} id="weight" placeholder='Enter Weight' />
        
            <button onClick={Submit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

const mapstate = (state) => {
  console.log(state.Ereducer);
  return {
    data: state.Ereducer,
  };
};
export default connect(mapstate, null)(Edit);
