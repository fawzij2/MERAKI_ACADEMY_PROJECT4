import React from 'react'
import {  useHistory } from "react-router-dom";
import "./Profile.css"

export default function Profile({nickName}) {
    const history = useHistory();
    
    return (
        <div className="outProfile" >
        <div className="profile">
            <h2  style={{ textAlign: "center" }}>Hello {nickName}</h2>
            <h4  style={{ textAlign: "center" }}>if you need to add new case please click here </h4>
            <button className="addButton"  onClick={()=>{history.push("/cases/create")}}>Add New Case</button>
        </div>
        </div>
    )
}
