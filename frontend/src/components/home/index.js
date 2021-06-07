import React from "react";
import "./home.css";
import Volunteers from "../volunteers/index"

const Home = ()=>{
    return (<div>
        <div className="welcoming sections">welcome to our website</div>
        <div className="about sections">about us</div>
        {/* <About /> */}
        <div className="categories">
            <div>educational</div>
            <div>health</div>
            <div>debts</div>
            <div>rebuilding</div>
        </div>
        {/* <Contact /> */}
        <div className="contact sections">contact us</div>
        <Volunteers />
        {/* <div className="colunteers sections">our volunteers</div> */}
        <div className="achievements sections">this is what we do</div>
        <div className="copyrights sections">copyrights go here</div>
    </div>)
};

export default Home;