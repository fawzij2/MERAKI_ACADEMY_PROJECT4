import React, { useState } from "react";
import axios from "axios";

import "./login.css";

import { useHistory } from "react-router-dom";


export default function Login({ setToken, path }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const loginFun = () => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.token) {
<<<<<<< HEAD
          //setToken(res.data.token);
=======

>>>>>>> 2130974da03cb69b0c70f77c940c4732ffbe20bd
          setLoginMessage("login successful");
          history.push(path);
        } else {
          setLoginMessage(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginMessage("please try again");

      });
  };

  return (
<<<<<<< HEAD
    <div>
      <p>Login</p>
      <p>Login to your account</p>
      <fieldset>
        <legend>E-mail</legend>
      <input
        type="text"
        placeholder="email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
     </fieldset>

     <fieldset>
        <legend>Password</legend>
      <input
        type="password"
        placeholder="password here"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
       </fieldset>
=======

    <div className="outLogin" >
    <div className="login" >
      <h2 style={{ textAlign: "center" }} >Login</h2>
      <h4 style={{ textAlign: "center" }} >Login to your account</h4>
      <fieldset>
        <legend>E-mail</legend>
        <input
          className="input"
          type="text"
          placeholder="email here"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        <input
        className="input"
          type="password"
          placeholder="password here"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </fieldset>

  
>>>>>>> 2130974da03cb69b0c70f77c940c4732ffbe20bd
      <button className="loginButton" onClick={loginFun}>
        LOGIN
      </button>
      <h4 className="message"  style={{ textAlign: "center" }} >{loginMessage}</h4>
    </div>
    </div>
  );
}

