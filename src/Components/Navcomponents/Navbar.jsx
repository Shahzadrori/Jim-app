import React from "react";
import "../../style/Nav/Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="navs">
        <ul>
          <Link to="/">
            <li>
              <HomeIcon className="icons" />
              Home
            </li>
          </Link>
          <Link to='/about'>
          <li>
            <InfoIcon className="icons" />
            About us
          </li>
          </Link>
          <Link to='/contact'>
          <li>
            <ContactsIcon className="icons" />
            Contact
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
