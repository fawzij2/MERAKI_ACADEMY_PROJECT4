import React, { useState, useEffect } from "react";
import axios from "axios"
const Donation = require("./../../../../backend/db/models/donations");

export default function Donations() {
  const [donations, setDonations] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);

  return <div>{donations && donations.map((donate,index)=>{
     return <p key={index} >{donate}</p>
  }) }</div>;
}
