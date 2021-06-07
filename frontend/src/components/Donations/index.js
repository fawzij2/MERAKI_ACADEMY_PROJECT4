import React, { useState, useEffect } from "react";
const Donation = require("./../../../../backend/db/models/donations");

export default function Donations() {
  const [donations, setDonations] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);

  return <div>donations</div>;
}
