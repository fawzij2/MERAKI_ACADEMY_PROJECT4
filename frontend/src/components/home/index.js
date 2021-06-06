import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./home.css";
import About from "./../About/About";
import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg"

const Home = ()=>{
        const images = [
            { url: photo1 },
            { url: photo2 },
            { url: photo3 },
        ];
    
    return (<div>
        <SimpleImageSlider
            width={1500}
            height={850}
            images={images}
            showBullets={true}        
            slideDuration={0.5}
            navStyle={1}
        />
        <About />
        <div className="categories">
            <div>educational</div>
            <div>health</div>
            <div>debts</div>
            <div>rebuilding</div>
        </div>
        {/* <Contact /> */}
        <div className="contact sections">contact us</div>
        {/* <Volunteers /> */}
        <div className="colunteers sections">our volunteers</div>
        <div className="achievements sections">this is what we do</div>
        <div className="copyrights sections">copyrights go here</div>
    </div>)
};

export default Home;