import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./home.css";
import Volunteers from "../volunteers/index"
import About from "./../About/About";
import photo1 from "./photo4.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import medical from "./medical.png";
import educational from "./educational.png";
import debt from "./debt.png";
import building from "./building.png";
import general from "./general.png";
import ContactUs from "../contactUs/index"
import { useHistory,Link } from "react-router-dom";
import Footer from '../footer/index'

const Home = () => {
  const images = [{ url: photo2 }, { url: photo3 }, { url: photo1 }];
  const history = useHistory()

  return (
    <div>
      <SimpleImageSlider
        width={1349}
        height={550}
        images={images}
        showBullets={true}
        slideDuration={0.5}
        navStyle={1}
      />
      <About />
      <div className="categories">
        <div className="introduction">
          <p className="introText">We support a myriad of causes. Choose any of the categories to see them</p>
          <div className="categoryBox3" onClick={(e)=>{
            history.push("/cases/categeories/General")
          }}>
            <p className="text">Other categories</p>
          </div>
        </div>
        <div className="mainCategories">
          <div className="categoryBox1" onClick={(e)=>{
            history.push(`/cases/categeories/Educational`)
          }}>
            <img src={educational} className="categoriesPics"></img>
            <p className="text">educational</p>
          </div>
          <div className="categoryBox2" onClick={(e)=>{
            history.push(`/cases/categeories/Health`)
          }}>
            <img src={medical} className="categoriesPics"></img>
            <p className="text">health</p>
          </div>
          <div className="categoryBox2" onClick={(e)=>{
            history.push(`/cases/categeories/Debts`)
          }}>
            <img src={debt} className="categoriesPics" ></img>
            <p className="text">debts</p>
          </div>
          <div className="categoryBox1" onClick={(e)=>{
            history.push(`/cases/categeories/Building`)
          }}>
            <img src={building} className="categoriesPics"></img>
            <p className="text">rebuilding</p>
          </div>
        </div>
        </div>
        <Volunteers />
        {/* <div className="colunteers sections">our volunteers</div> */}
        <div className="achievements sections">this is what we do</div>
        {/* <Contact /> */}
        <div className="contact-section"><ContactUs/></div>
        {/* <div className="copyrights-section">copyrights go here</div> */}
        <Footer/>
        <div><Link to="/update">my cases</Link></div>
    </div>
    )
};

export default Home;
