import React ,{useState} from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "../../style/Regis.css";
import "react-toastify/dist/ReactToastify.css";

const Regis_form = () => {
const [inp_val,setinp_val] = useState();
// console.log(inp_val);
   var name = document.getElementById('name').value
   var id = document.getElementById('id').value
   var phone = document.getElementById('phone').value
   var age = document.getElementById('age').value
   console.log(name.length)
const Submit = ()=>{
    if(name == "" || name == null){
        alert('Name field should not be empty')
    }else if(name.length == 4 || name.length < 4){
        alert('Name field should atleast contain 4 digits')
    }
}


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
          <input onChange = {e => setinp_val(e.target.value)} id='name' type="text" placeholder="Enter Your Name" />
          <label>ID :</label>
          <input onChange = {e => setinp_val(e.target.value)} id='id' type="Number" placeholder="Enter Your ID Card Number" />
          <label>Phone :</label>
          <input onChange = {e => setinp_val(e.target.value)} id='phone' type="Number" placeholder="Enter Your Phone Number" />
          <label>Age :</label>
          <input onChange = {e => setinp_val(e.target.value)} id='age' type="text" placeholder="Enter Your Age in Numbers" />
          <button onClick={toasts}>Submit</button>
        </div>
        <div className='img_regis'>
        <h1>Muhammad Ali </h1>
        <h2><q>DON'T COUNT THE DAYS;<br/>
        MAKE THE DAYS COUNT</q></h2>
        </div>
      </div>
    </>
  );
};

export default Regis_form;
