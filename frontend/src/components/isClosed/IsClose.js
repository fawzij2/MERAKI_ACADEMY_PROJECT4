import { React, useState, useEffect } from "react";
import axios from "axios";
import "./isClose.css";
export default function IsClose({ token,isAdmin }) {
  const [result, setResult] = useState([]);
  const [update1, setUpdate] = useState("");
  let a ;
  const update = (id) => {
    axios
      .put(`http://localhost:5000/cases/case/closed/${id}`,{updates:{isClosed:true}},{headers: {
        'Authorization': `Bearer ${token}`
}})
      .then((response) => {
        setUpdate(Math.random())
      })
      .catch((err) => {
        throw err;
      });
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/cases")
      .then((result) => {
        setResult(
          result.data.map((elem, i) => {
            return (
              <div key={i} className="caseCard">
                <p>{<img src="" alt="case image" />}</p>
                <p>{"Category : " + elem.category}</p>
                <p>{"Case Name : " + elem.caseName}</p>
                <p>{"Needed Amount : " + elem.neededAmount}</p>
                <p>{"Address : " + elem.address}</p>
                <p>{"is closed : " + elem.isClosed}</p>
                <p></p>
                {isAdmin ? <button className="close" onClick={() => update(elem._id)}>update</button>:<></>}
              </div>
            );
          })
        );
      })
      .catch((err) => {
        return <div>{err}</div>;
      });
  }, [update1]);
  return (
    <>
      <div>{result}</div>
    </>
  );
}
