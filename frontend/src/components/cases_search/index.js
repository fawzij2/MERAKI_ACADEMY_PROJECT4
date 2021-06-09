import React, { useState, useEffect } from "react";
import "./cases_search.css";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CaseSearch = ({ setPath, id }) => {
  const { categeory } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [cases, setCases] = useState([]);
  useEffect(() => {
    setPath(location.pathname);
    axios
      .get(`http://localhost:5000/cases/categeories/${categeory}`)
      .then((result) => {
        setCases(result.data);
      });
  }, []);
  const searchDonations = (x) => {
    if (x === 500 || x === 1000 || x === 4999) {
      axios
        .get("/categeories/:category1", {
          donationNeeded: x,
        })
        .then((result) => {
          setCases(result.data);
        })
        .catch((err) => {
          err.status(err.response.data.status);
          console.log(err);
        });
    } else {
      axios
        .get("/categeories/:category2", {
          donationNeeded: x,
        })
        .then((result) => {
          setCases(result.data);
        })
        .catch((err) => {
          err.status(err.response.data.status);
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="caseSearch">
        <div className="searchBarSection">
          <div className="searchBarParts">
            Donations Needed
            <select name="neededDonations" id="donations" onChange={(e)=>{
              searchDonations(e.target.value)
            }} >
              <option value="500">less than 500</option>
              <option value="1000">less than 1000</option>
              <option value="4999">less than 5000</option>
              <option value="5000">more than 5000</option>
            </select>
          </div>
          <div className="searchBarParts">
            Sort
            <select name="sorting" id="sorting">
              <option value="highLow">High to low</option>
              <option value="lowHigh">Low to High</option>
            </select>
          </div>
          <div className="searchBar">
            <input className="searchBar" placeholder="Enter a case name" />
          </div>
        </div>
        <div className="caseCards">
          {cases.map((elem, i) => {
            return (
              <div key={i} className="caseCard">
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
