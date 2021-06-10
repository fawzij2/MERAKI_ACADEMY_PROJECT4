import React, { useState, useEffect } from "react";
import "./cases_search.css";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CaseSearch = ({ setPath, id }) => {
  const { categeory } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [cases, setCases] = useState([]);
  const [donation, setDonation] = useState();
  const [sorting, setSorting] = useState("lowHigh");
  const [caseName, setCaseName] = useState("");
  useEffect(() => {
    setPath(location.pathname);
    axios
      .get(`http://localhost:5000/cases/categeories/${categeory}`)
      .then((result) => {
        setCases(result.data);
      });
  }, []);
  useEffect(() => {
    console.log(donation)
      axios
        .post(`http://localhost:5000/cases/categeories/${categeory}`, {
          donationNeeded: Number(donation) ,
          sorting: sorting,
          caseName:caseName,
        })
        .then((result) => {
          setCases(result.data);
          console.log(result.data)
        })
        .catch((err) => {
         
          console.log(err.response.data);
        });
    
  }, [donation, sorting, caseName])
  const searchDonations = () => {
    
  };
  return (
    <>
      <div className="caseSearch">
        <div className="searchBarSection">
          <div className="searchBarParts">
            Donations Needed
            <select name="neededDonations" id="donations" onChange={ (e)=>{
              setDonation(e.target.value)
              searchDonations()
            }} >
              <option value="500">less than 500</option>
              <option value="1000">less than 1000</option>
              <option value="4999">less than 5000</option>
              <option value="5000">more than 5000</option>
            </select>
          </div>
          <div className="searchBarParts">
            Sort
            <select name="sorting" id="sorting" onChange={ (e)=>{
              setSorting(e.target.value)
              searchDonations()
            }}>
              <option value="highLow">High to low</option>
              <option value="lowHigh">Low to High</option>
            </select>
          </div>
          <div className="searchBar">
            <input className="searchBar" placeholder="Enter a case name" onChange={ (e)=>{
              setCaseName(e.target.value);
              searchDonations();
            }} />
          </div>
        </div>
        <div className="caseCards">
          {cases.map((elem, i) => {
            return (
              <div key={i} className="caseCard" onClick={()=>{
                history.push(`/cases/${elem._id}`)
              }}>
                <div className="casePic">
                  <img></img>
                </div>
                <div className="caseInfo">
                  <div className="donations">
                    <div>Goal: {elem.neededAmount}</div>
                    <div>Progress: {elem.donatedAmount}</div>
                  </div>
                  <div className="caseName">{elem.caseName}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CaseSearch;
