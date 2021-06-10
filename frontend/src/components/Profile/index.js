import React from 'react'
import {  useHistory } from "react-router-dom";

export default function Profile({nickName}) {
    const history = useHistory();
    return (
        
        <div>
            <h2>HELLO {nickName}</h2>
            <h4>if you need to add new case please click here </h4>
            <button onClick={history.push("/AddNewCase")}>Add New Case</button>
        </div>
    )
}
