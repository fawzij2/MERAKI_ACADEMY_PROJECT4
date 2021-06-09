import React, { useState } from "react";
import "./AddNewCase";
import axios from "axios";

export default function AddNewCase() {
  const [caseName, setCaseName] = useState("");
  const [category, setCategory] = useState("");
  const [neededAmount, setNeededAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [isPrivate, setIsPrivate] = useState("Yes");
  const [message, setMessage] = useState("");
  const branchh = [
    " ",
    "Education",
    "Treatment",
    "Restoration",
    "Dept payment",
  ];
  const yesNo = ["", "Yes", "No"];

  //register2

  const AddCase = () => {
    axios
      .post("http://localhost:5000/cases/create", {
        caseName,
        category,
        neededAmount,
        address,
        isPrivate,
      })
      .then((res) => {
        console.log(res);
        setMessage("add successfully");
      })
      .catch((err) => {
      // if (res.status===400) {
      //   setMessage("error");  
      // }  
        throw err;
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="case name here"
        onChange={(e) => {
          setCaseName(e.target.value);
        }}
      />

      <label>Choose kind of help :</label>
      <select>
        {branchh.map((element, index) => (
          <option
            key={index}
            onSelect={() => {
              setCategory(element);
              console.log({ element });
            }}
          >
            {element}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="needed amount"
        onChange={(e) => {
          setNeededAmount(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="address here"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <label>are you want keep your information secret?</label>
      <select>
        {yesNo.map((element, index) => (
          <option
            key={index}
            onSelect={() => {
              setIsPrivate(element);
              console.log({ element });
            }}
          >
            {element}
          </option>
        ))}
      </select>
      <button onClick={AddCase}>Add</button>
      <p>message</p>
    </div>
  );
}
