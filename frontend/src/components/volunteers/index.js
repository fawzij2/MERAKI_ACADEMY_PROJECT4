import React from "react";
import "./volunteers.css";

import emp1 from "./emp1.jpg";
import emp2 from "./emp2.jpg";
import emp3 from "./emp3.jpg";
import emp4 from "./emp4.jpg";

const Volunteers = () => {
  return (
    <div className="volunteers" id="volunteers">
      <div className="volIntro">
        <p className="volIntroText">Our Great team</p>
        <p className="volText">
          Introducing our great Team who do great efforts in delivering your
          donations.
        </p>
      </div>
      <div className="volunteerCards">
        <div className="volCard">
          <img className="employees" src={emp1}></img>
          <div className="volInfo">
            <p className="volName">Bayan Al Safadi</p>
            <p className="volText">The founder and heart of BLISS family</p>
          </div>
        </div>
        <div className="volCard">
          <img className="employees" src={emp3}></img>
          <div className="volInfo">
            <p className="volName">Fawzi Dahamsheh</p>
            <p className="volText">the problem solver (and maker)</p>
          </div>
        </div>
        <div className="volCard">
          <img className="employees" src={emp2}></img>
          <div className="volInfo">
            <p className="volName">Ghaidaa Tabikh</p>
            <p className="volText">the most passionate of our team</p>
          </div>
        </div>
        <div className="volCard">
          <img className="employees" src={emp4}></img>
          <div className="volInfo">
            <p className="volName">Basem Hmoud</p>
            <p className="volText">The big brother of BLISS family</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
