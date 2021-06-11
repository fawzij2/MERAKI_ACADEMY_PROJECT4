import { React, useState, useEffect } from "react";
import axios from "axios";
import "./closedCases.css";
export default function ClosedCases({ setPath }) {
  const [result, setResult] = useState([])
 useEffect(()=>{
  axios
    .get("http://localhost:5000/cases/closed")
    .then((result) => {
      console.log(result)
      setResult( result.data.map((elem, i) => {
        return <div key={i} className="test">
          {/* {elem.category,elem.caseName,elem.neededAmount} */}
          <p>{<img src="" alt="case image"/>}</p>
          <p>{"Category : "+elem.category}</p>
          <p>{"Case Name : "+elem.caseName}</p>
          <p>{"Needed Amount : "+elem.neededAmount}</p>
          <p>{"Address : "+elem.address}</p>
          
          </div>;
        // return <div>
        //   <p>{elem. caseName}</p>
        // </div>
      }));
    })
    .catch((err) => {
      return <div>{err}</div>;
    })},[]);
    return <><div>{result}</div></>
} 
