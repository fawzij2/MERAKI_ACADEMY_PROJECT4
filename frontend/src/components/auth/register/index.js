import React, { useState } from "react";

import "./register.css";

import { Route, useHistory } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const history = useHistory();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [IBAN, setIBAN] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const postRegister = () => {
    console.log({
      nickName,
      email,
      password,
      age,
      city,
      phoneNo,
      IBAN,
    });

    if (password===confirmPassword) {
      axios
      .post("http://localhost:5000/register", {
        nickName,
        email,
        password,
        age,
        city,
        phoneNo,
        IBAN,
      })
      .then((res) => {

        if (res.data.errors) {
          setRegisterMessage(
            "some thing happened while register, please try again"
          );
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        throw err;
      });
    }
    else{setRegisterMessage("please check the password")}
   
  };

  return (
    <div>
      <p>Register : </p>
      <div>
        <input
          type="text"
          placeholder="nick name here"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="email here"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password here"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm password here"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="age here"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="city here"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="phone number here"
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="IBAN here"
          onChange={(e) => {
            setIBAN(e.target.value);
          }}
        />
        <button className="button" onClick={postRegister}>
          Register
        </button>
        <p>{registerMessage}</p>
      </div>
    </div>
  );
}