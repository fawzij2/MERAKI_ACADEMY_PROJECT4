import React from "react";
import "./home.css";

const Home = ()=>{
    return (<div>
        <div className="welcoming">welcome to our website</div>
        <About />
        <div className="categories">
            <div>educational</div>
            <div>health</div>
            <div>debts</div>
            <div>rebuilding</div>
        </div>
        <Contact />
        <Volunteers />
        <div className="achievements">this is what we do</div>
        <div className="copyrights">copyrights go here</div>
    </div>)
}

export default Home