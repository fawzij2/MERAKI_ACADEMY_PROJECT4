import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Home from "./components/home/index";
import ClosedCases from "./components/closedCases/ClosedCases";
import Login from "./components/auth/login/index";
import Register from "./components/auth/register/index";
// import AddNewCase from "./components/AddNewCase/index"
import CaseSearch from "./components/cases_search";
import Update from './components/case/updateCase'
import IsClose from './components/IsClose'
import Update from "./components/case/updateCase";
import AddNewCase from "./components/AddNewCase/index";
import Profile from "./components/Profile/index"

const App = () => {
  const [path, setPath] = useState("");
  const [token, setToken] = useState("");
  const [nickName, setNickName] = useState("")

  useEffect(() => {
    if (localStorage.getItem("token")) setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("nickName")) setNickName(localStorage.getItem("nickName"));
  }, []);

  console.log("INSIDE APP: ", token);
  return (
    <>
      <div className="App">

        <Navigation />
        <Route exact path="/" render={()=><Home setPath={setPath}/>} />
        <Route exact path="/login" render={()=><Login path={path} setToken={setToken} />} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/isClose" render={()=><IsClose token={token} />}/>
		    <Route exact path="/cases/closed" render={()=><ClosedCases setPath={setPath} />}/>
		    <Route path="/cases/categeories/:categeory" render={()=><CaseSearch setPath={setPath} />} />
        <Route exact path = "/cases/:id" />
        <Route exact path="/update" component={Update} setToken={setToken}/>

        <Navigation token={token} />
       
        <Route exact path="/update" render={() => <Update token={token} />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/AddNewCase"  component={AddNewCase} />

        {/* <Route exact path="/cases/create" component={AddNewCase} /> */}
      </div>
    </>
  );
};

export default App;
