import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ token }) => {
  
  return (
    <div className="navBar">
      <div className="others">
        <Link to="/" className="links">
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            cases
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/cases" className="dropDownLinks">
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
      </div>
      {token ? (
        <div className="signing"><Link to="/profile" className="links logreg">
          Profile
        </Link>
        <Link to="/logout" className="links logreg" >
        Logout
      </Link>
      <Link to="/update" className="links logreg">my cases</Link></div>
      ) : (
        <div className="signing">
          <Link to="/login" className="links logreg">
            Login
          </Link>
          <Link to="/register" className="links logreg">
            Register
          </Link>
          <Link to="/isClose" className="dropDownLinks">
          is Close
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
