import React from "react";
import "./volunteers.css";

const Volunteers = () => {
  return (
    <div className="volunteers">
      <div className="volIntro">
        <p className="volIntroText">Our Great Volunteers</p>
        <p className="volText">
          Introducing our great volunteers who do great efforts in helping
          others
        </p>
      </div>
      <div className="volunteerCards">
        <div className="volCard">
          <img></img>
          <div className="volInfo">
            <p className="volName">Bayan Al Safadi</p>
            <p className="volText">The founder and heart of BLISS family</p>
          </div>
        </div>
        <div className="volCard">
          <img></img>
          <div className="volInfo">
            <p className="volName">Fawzi Dahamsheh</p>
            <p className="volText">the problem solver (and maker)</p>
          </div>
        </div>
        <div className="volCard">
          <img></img>
          <div className="volInfo">
            <p className="volName">Ghaidaa Tabikh</p>
            <p className="volText">the most passionate of our team</p>
          </div>
        </div>
        <div className="volCard">
          <img></img>
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
