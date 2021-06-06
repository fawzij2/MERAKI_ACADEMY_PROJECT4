import React from 'react'

export default function AddNewCase() {
const [caseName, setCaseName] = useState("")
const [category, setCategory] = useState("")
const [neededAmount, setNeededAmount] = useState(0)
const [address, setAddress] = useState("")
const [isPrivate, setIsPrivate] = useState("Yes")



    return (
        <div>
            <input type="text" placeholder = "case name here"  onChange={(e)=>{
                setCaseName(e.target.value)
            }}  />

            <input type="text" placeholder=""/>
            <input type="number" placeholder="needed amount"  onChange={(e)=>{
              setNeededAmount(e.target.value)  
            }}  />
            <input type="text" placeholder="address here" onChange={(e)=>{
                setAddress(e.target.value)

            }} />
            <input type="" placeholder=""/>

            

            
        </div>
    )
}
