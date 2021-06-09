import React , {useEffect,useState} from 'react'
import axios from 'axios';

const Update=()=>{


const [cases,setCases] = useState([]);

 useEffect(
     getCases
,[]);

function getCases(){

    axios.get("http://localhost:5000/cases/").then((result)=>{
        
        setCases(result.data)
    })
    .catch(err=>{
        console.log(err);
    })
}

console.warn(cases)

const deleteCase=(id)=>{
 axios.delete(`http://localhost:5000/cases/case/${id}`).then((result)=>{
     console.log(result.data);
     getCases()
 })
 .catch(err=>{
     console.log(err.response.data);
 })
}

const updateCase=(id)=>{

}

return (
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
                {
            cases.map((item,index)=>{
               return  <tr key={index}>
                    <td>{item.caseName}</td>
                    <td>{item.category}</td>
                    <td>{item.isPrivate}</td>
                    <td>{item.neededAmount}</td>
                    <td><button onClick={()=>deleteCase(item._id)}>Delete</button></td>
                    <td><button onClick={()=>updateCase(item._id)}>Update</button></td>
                </tr>    
            })
                }
            </tbody>
        </table>
    </div>
)

}

export default Update;