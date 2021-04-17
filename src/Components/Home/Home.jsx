import React from "react";
import "../../style/Home/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-main">
      <div className="home-btn">
        <Link to="/login">
          <button>Register</button>
        </Link>
        </div>
      </div>
      <div className="test"></div>
    </>
  );
};

export default Home;
