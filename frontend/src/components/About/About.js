import react from "react";
import poor from "./poor.jpg"
import man from "./help.png"
import house from "./house.png"

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="aboutImg">
          <img src={poor}></img>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <h1>BLISS is <span>Nonprofit</span> Organization <span>For Helping</span> needed cases. </h1>
          <p>Bliss goal is giving help to those in need of it. As a humanitarian act, which involves giving money, goods or time and effort to those who need it. It is done without expecting something in return.</p>
          <div>
          <img src={house}></img> <span>Save Buildings.</span>
          <img src={man}></img> <span>Help poor.</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;