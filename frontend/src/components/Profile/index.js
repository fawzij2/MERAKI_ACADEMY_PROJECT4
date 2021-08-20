import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";

// IBAN: "96-7889-333"
// age: 26
// city: "AMMAN"
// email: "ghaidaa@hotmail.com"
// nickName: "Ghaidaa"
// password: "$2b$10$kzIrb9Lq8TKODfmemi4SAuzDMi6Feg9yyOhJbjRt9U.Q0cAGWBeVK"
// phoneNo: "07389499"
// role: "60c460bb1d246d3110e885fa"
// __v: 0
// _id: "60c4651aff2284279409cbba"

export default function Profile({ nickName, token }) {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log("profile data", result.data);
        setUserInfo(result.data);
        console.log("UserInfo", userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="outProfile">
      <div className="profile">
        <h2 style={{ textAlign: "center" }}>Hello {nickName}</h2>
        <div>
          <div> Name: {userInfo.nickName}</div>
          <div> Age: {userInfo.age}</div>
          <div> Email: {userInfo.email}</div>
          <div>City: {userInfo.city}</div>
          <div>PhoneNo: {userInfo.phoneNo}</div>
          <div>IBAN: {userInfo.IBAN}</div>
        </div>
        <h4 style={{ textAlign: "center" }}>
          if you need to add new case please click here{" "}
        </h4>
        <button
          className="addButton"
          onClick={() => {
            history.push("/cases/create");
          }}
        >
          Add New Case
        </button>
        <button
          className="addButton"
          onClick={() => {
            history.push("/profile/update");
          }}
        >
          Update profile{" "}
        </button>
        <Link to="/myCases" className="links logreg">
          My Cases
        </Link>
        <div></div>
      </div>
    </div>
  );
}
