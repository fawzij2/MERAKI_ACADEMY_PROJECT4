import { React, useState, useEffect } from "react";
import axios from "axios";
export default function ClosedCases({ setPath }) {
  setPath("/cases/closed")
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cases/closed")
      .then((result) => {
        console.log(result);
        setResult(
          result.data.map((elem, i) => {
            return (
              <div key={i}>
                {/* {elem.category,elem.caseName,elem.neededAmount} */}
                <p>{elem.category}</p>
                <p>{elem.caseName}</p>
                <p>{elem.neededAmount}</p>
                <p>{elem.address}</p>
              </div>
            );
            // return <div>
            //   <p>{elem. caseName}</p>
            // </div>
          })
        );
      })
      .catch((err) => {
        return <div>{err}</div>;
      });
  }, []);
  return <div>{result}</div>;
}
