import React from "react";
import { connect } from "react-redux";
import "../style/List/persona.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
const Persona = (props) => {
  function back() {
    window.location.href = "/list";
  }
  const height = () => {
    if (props.data[0].height) {
      return (
        //  <video className='video' style={{marginLeft:'200px'}} width="400px" controls>
        //     <source src={props.data[0].vid} type="video/mp4" />
        // </video>
        <h5
          style={{
            marginLeft: "100px",
          }}
        >
          Height :{props.data[0].height}
        </h5>
      );
    }
  };
  const weight = () => {
    if (props.data[0].weight) {
      return (
        <h5
          style={{
            marginLeft: "100px",
          }}
        >
          Weight : {props.data[0].weight}
        </h5>
      );
    }
  };
  return (
    <>
      <div className="persona_outer">
        <Button onClick={back} variant="contained" className="back-btn">
          {" "}
          <ArrowBackIosIcon /> Back
        </Button>
        <div className="persona_inner">
          <div className="persona_img">
            <img src={props.data[0].pic} />
            <h1>{props.data[0].name}</h1>
          </div>
          <div className="persona_content">
            <div className="persona_txt">
              <p>ID : </p>
              <p>Age : </p>
              <p>Phone : </p>
              {props.data[0].expdate && <p>Amount : </p>}
              {props.data[0].expdate && <p>Pay Date : </p>}
              {props.data[0].expdate && <p>Expirey Date : </p>}
            </div>
            <div className="persona_txt_value">
              <p>{props.data[0].id}</p>
              <p>{props.data[0].age}</p>
              <p>{props.data[0].phone}</p>
              <p>{props.data[0].amount}</p>
              {props.data[0].expdate && <p>{props.data[0].paydate}</p>}
              {props.data[0].expdate && <p> {props.data[0].expdate}</p>}
            </div>
            <div>
              {height()}
              <br />
              {weight()}
            </div>
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
