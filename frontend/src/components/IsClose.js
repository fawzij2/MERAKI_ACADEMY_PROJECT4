import { React, useState, useEffect } from "react";
import axios from "axios";
import "./isClose.css";
export default function IsClose({ token }) {
  let a ;
  const update = (x) => {
    console.log(x);
    // setResult.isClosed = true;
    axios
      .put(`http://localhost:5000/cases/case/${x}`,{updates:{isClosed:true}},{headers: {
        // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJhNzgyZjc5NDM5YjI1YjBiZDkyM2YiLCJyb2xlIjoiNjBiYTE1Y2QxZmJkNTgwMzQ4NjZhMDAyIiwiaWF0IjoxNjIzMzU3ODY4LCJleHAiOjE2MjMzNzIyNjh9.S5JdvTPaqwePj96VqMcL40Rcqe5QRffJsOf6Os81V6c`
        'Authorization': `Bearer ${token}`
}})
      .then((response) => {
        setUpdate(Math.random())
       console.log(response.data);
      })
      .catch((err) => {

        console.log(err.response.data);
      });
  };
  const [result, setResult] = useState([]);
  const [update1, setUpdate] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/cases")
      .then((result) => {
        console.log(result);
        setResult(
          result.data.map((elem, i) => {
            return (
              <div key={i} className="test1">
                {/* {elem.category,elem.caseName,elem.neededAmount} */}
                <p>{<img src="" alt="case image" />}</p>
                <p>{"Category : " + elem.category}</p>
                <p>{"Case Name : " + elem.caseName}</p>
                <p>{"Needed Amount : " + elem.neededAmount}</p>
                <p>{"Address : " + elem.address}</p>
                <p>{"is closed : " + elem.isClosed}</p>
                <p></p>
                <button onClick={() => update(elem._id)}>update</button>

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
  }, [update1]);
  return (
    <>
      <div>{result}</div>
    </>
  );
}
