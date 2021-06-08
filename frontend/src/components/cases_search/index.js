import React,{useState, useEffect} from "react";
import "./cases_search.css";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CaseSearch = ({setPath, id}) => {
    const {categeory} = useParams()
  const history = useHistory();
  const location = useLocation()
  const [cases, setCases] = useState([]);
  useEffect(() => {
      setPath(location.pathname)
      axios.get(`http://localhost:5000/cases/categeories/${categeory}`)
      .then((result)=>{
          setCases(result.data.map((elem,i)=>{
              return (<div key={i} className="caseCard">
                  <div className="casePic">
                      <img></img>
                  </div>
                  <div className="caseInfo">
                      <div className="donations">
                          <div>{elem.neededAmount}</div>
                          <div>{elem.donatedAmount}</div>
                      </div>
                      <div className="caseName">
                          {elem.caseName}
                      </div>
                  </div>
              </div>)
          }))
      })
  },[])
  return (
    <>
      <div className="caseSearch">
          <div className="searchBarSection">
              <div>
              Donations Needed 
              <select name="neededDonations" id="donations">
                  <option value="500">less than 500</option>
                  <option value="1000">less than 1000</option>
                  <option value="5000">less than 5000</option>
                  <option value="5500">more than 5000</option>
              </select>
              </div>
              <div>
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
          {cases}
      </div>
    </>
  );
};

export default CaseSearch
