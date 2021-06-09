import React , {useEffect,useState} from 'react'
import axios from 'axios';

const Update=()=>{


const [cases,setCases] = useState([]);

useEffect(
    ()=>{axios.get("http://localhost:5000/cases/").then((result)=>{
        setCases(result);
    })
    .catch(err=>{
        console.log(err);
    })}
,[]);

console.warn(cases)

return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <td>Case ID</td>
                    <td>Case Name</td>
                    <td>Case Category</td>
                    <td>Case Privacy</td>
                    <td>Case Amount</td>
                </tr>
            </thead>

            <tbody>
                
            {    
            cases.map((item,index)=>{
                <tr key={i}>
                    <td>{item._Id}</td>
                    <td>{item.caseName}</td>
                    <td>{item.category}</td>
                    <td>{item.isPrivate}</td>
                    <td>{item.neededAmount}</td>
                </tr>    
            })
                }
            </tbody>
        </table>
    </div>
)

}

export default Update;