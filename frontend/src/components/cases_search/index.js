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
      <div>
          {cases}
      </div>
    </>
  );
};

export default CaseSearch
