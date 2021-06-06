import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navBar">
      <Link to="/" className="links">
        Home
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          cases
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {/* <Link to="/cases" className="dropDownLinks"> */}
          <Link to="" className="dropDownLinks">
            available cases
          </Link>
          <Link to="/cases/closed" className="dropDownLinks">
            closed cases
          </Link>
        </div>
      </div>
      <Link to="/about" className="links">
        About Us
      </Link>
      <Link to="/volunteers" className="links">
        Our Volunteers
      </Link>
      <Link to="/contactus" className="links">
        Contact Us
      </Link>
      <Link to="/login" className="links logreg">
        Login
      </Link>
      <Link to="/register" className="links logreg">
        Register
      </Link>
    </div>
  );
};

export default Navigation;
