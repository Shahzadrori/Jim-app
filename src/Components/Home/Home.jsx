import React from "react";
import "../../style/Home/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <Link to="/login">
          <button>Register</button>
        </Link>
      </div>
      <div className="test"></div>
    </>
  );
};

export default Home;
