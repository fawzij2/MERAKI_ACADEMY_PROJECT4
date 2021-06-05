import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css"

const Navigation = () => {
  return (
    <>
      <div className="navBar">
        <Link to="/">Home</Link>
        <div class="dropdown">
          <button class="dropbtn">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/cases">available cases</Link>
            <Link to="/cases/closed">closed cases</Link>
          </div>
        </div>
		<Link to= "/about">About Us</Link>
		<Link to= "/volunteers">Our Volunteers</Link>
		<Link to= "/contactus">Contact Us</Link>
		<Link to= "/login">Login</Link>
		<Link to= "/register">Register</Link>
      </div>
    </>
  );
};

export default Navigation;
