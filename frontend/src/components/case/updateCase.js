import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = ({ token }) => {
  console.log("INSIDE UPDATE : ", token);
  const [cases, setCases] = useState([]);
  const [caseName,setCaseName] = useState("");
  const [category,setCategory] = useState("")
  const [isPrivate,setIsPrivate] = useState("")
  const [neededAmount,setNeededAmount] = useState(0);
  const [caseId,setCaseId] = useState('');

  useEffect(getCases, []);

  function getCases() {
    axios
      .get("http://localhost:5000/user/cases/",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setCases(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.warn(cases);

  const deleteCase = (id) => {
    axios
      .delete(`http://localhost:5000/cases/case/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        getCases();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const selectCase = (index) => {
    setCaseName(cases[index].caseName);
    setCategory(cases[index].category);
    setIsPrivate(cases[index].isPrivate);
    setNeededAmount(cases[index].neededAmount);
    setCaseId(cases[index]._id);
  };

  const updateCase=()=>{
      console.log({caseName,category,isPrivate,neededAmount,caseId});
    axios
    .put(`http://localhost:5000/cases/case/${caseId}`,{caseName,category,isPrivate,neededAmount}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      console.log(result.data);
      getCases();
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <div>
        <div>
      <table border="1">
        <tbody>
          <tr>
            <th>Case Name</th>
            <th>Case Category</th>
            <th>Case Privacy</th>
            <th>Case Amount</th>
            <th></th>
            <th></th>
          </tr>
          {cases.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.caseName}</td>
                <td>{item.category}</td>
                <td>{item.isPrivate.toString()}</td>
                <td>{item.neededAmount}</td>
                <td>
                  <button onClick={() => deleteCase(item._id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => selectCase(index)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <div>
          <input type="text" value={caseName} onChange={(e)=>{setCaseName(e.target.value)}} /><br/><br/>
          <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}/><br/><br/>
          <input type="text" value={isPrivate} onChange={(e)=>{setIsPrivate(e.target.value)}}/><br/><br/>
          <input type="number" value={neededAmount} onChange={(e)=>{setNeededAmount(e.target.value)}}/><br/><br/>
          <button type="submit" onClick={updateCase}>Update</button><br/><br/>
      </div>
    </div>
  );
};

export default Update;
