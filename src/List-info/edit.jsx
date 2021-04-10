import React from "react";
import { connect } from "react-redux";
import '../style/Regis.css'
const Edit = (props) => {
    const [inp_val, setinp_val] = useState({
        name: "",
        id: "",
        phone: "",
        age: "",
        pic: "",
        date:"",
        expdate:""
      });
    const Target = (eve)=>{
     let value = eve.target.value;
     let Name = eve.target.name;
     setinp_val((allvalues) => {
        if (Names === "names") {
          return {
            name: Values,
            id: allvalues.id,
            phone: allvalues.phone,
            age: allvalues.age,
            pic: allvalues.pic,
            date:allvalues.date,
            expdate:allvalues.expdate
          };
        } else if (Names === "id") {
          return {
            name: allvalues.name,
            id: Values,
            phone: allvalues.phone,
            age: allvalues.age,
            pic: allvalues.pic,
            date:moment().format('DD-MM-YYYY'),
           expdate:null
          };
        } else if (Names === "phone") {
          return {
            name: allvalues.name,
            id: allvalues.id,
            phone: Values,
            age: allvalues.age,
            pic: allvalues.pic,
            date:allvalues.date,
            expdate:allvalues.expdate
          };
        } else if (Names === "age") {
          return {
            name: allvalues.name,
            id: allvalues.id,
            phone: allvalues.phone,
            age: Values,
            pic: allvalues.pic,
            date:allvalues.date,
            expdate:allvalues.expdate
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
            date:allvalues.date,
            expdate:allvalues.expdate,
            pic: Info,
          };
        }
      });
    }
  return (

    <>
      <div className='edit-outer'>
      <form onSubmit={(e)=> e.preventDefault()}>
      <div className="inner_regis">
          <h1>Edit</h1>
          <label>Name :</label>
          <input
            name="names"
            // value={props.data[0].name}
            // onChange={Target_val}
            id="names"
            type="text"
            placeholder={props.data[0].name}
          />
          <label>ID :</label>
          <input
            name="id"
            // value={inp_val.id}
            // onChange={Target_val}
            id="id"
            type="Number"
            placeholder={props.data[0].id}
          />
          <label>Phone :</label>
          <input
            name="phone"
            // value={inp_val.phone}
            // onChange={Target_val}
            id="phone"
            type="Number"
            placeholder={props.data[0].phone}
          />
          <label>Age :</label>
          <input
            name="age"
            // value={inp_val.age}
            // onChange={Target_val}
            id="age"
            type="text"
            placeholder={props.data[0].age}
          />
          <label>Photo :</label>
          <input
            type="file"
            name="pic"
            // onChange={Target_val}
            id="pic"
          />
          <button>Submit</button>
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
