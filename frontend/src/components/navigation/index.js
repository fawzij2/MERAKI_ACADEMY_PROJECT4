import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ token,setHomePageSection }) => {
  const history = useHistory();
  return (
    <div className="navBar">
      <div className="others">
        <Link to="/" className="links" >
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            cases
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/" className="dropDownLinks" onClick={()=>{
          setHomePageSection("categories")
        }}>
              available cases
            </Link>
            <Link to="/cases/closed" className="dropDownLinks">
              closed cases
            </Link>
          </div>
        </div>
        <Link to="/" className="links" onClick={()=>{
          setHomePageSection("about")
        }}>
          About Us
        </Link>
        <Link to="/" className="links" onClick={()=>{
          setHomePageSection("volunteers")
        }}>
          Our Volunteers
        </Link>
        <Link to="/" className="links" onClick={()=>{
          setHomePageSection("container")
        }}>
          Contact Us
        </Link>
      </div>
      {token ? (
        <div className="signing"><Link to="/profile" className="links logreg">
          Profile
        </Link>
        <Link to ='/' className="links logreg" onClick={()=>{ localStorage.clear();}
    } >
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
        </div>
      )}
    </div>
  );
};

export default Navigation;
