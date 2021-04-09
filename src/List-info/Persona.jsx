import React from "react";
import { connect } from "react-redux";
import "../style/List/persona.css";
const Persona = (props) => {
  return (
    <>
      <div className="persona_outer">
        <div className="persona_inner">
          <div className="persona_img">
            <img src={props.data[0].pic} />
            <h1>Jamshaidlllll</h1>
          </div>
          <div className="persona_content">
            <div className="persona_txt">
              <p>ID : </p>
              <p>Age : </p>
              <p>Phone : </p>
              <p>Amount : </p>
              <p>Pay Date : </p>
              <p>Expirey Date : </p>
            </div>
            <div className="persona_txt_value">
              <p>{props.data[0].id}</p>
              <p>{props.data[0].age}</p>
              <p>{props.data[0].phone}</p>
              <p>{props.data[0].amount}</p>
              <p>{props.data[0].paydate}</p>
              <p> {props.data[0].expdate}</p>
            </div>
            {/* <video style={{marginLeft:'200px'}} width="400px" controls>
              <source src={props.data[0].pic} type="video/mp4" />
            </video> */}
          </div>
        </div>
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
export default connect(mapstate, null)(Persona);
