import React,{useState} from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import  Home  from "./components/home/index";
import ClosedCases from "./components/closedCases/ClosedCases";
import Login from './components/auth/login/index';
import Register from './components/auth/register/index';
// import AddNewCase from "./components/AddNewCase/index"
import CaseSearch from "./components/cases_search";
import Update from './components/case/updateCase'

const App = () => {
  const [path, setPath] = useState("");
  const [token, setToken] = useState("");
  return (
    <>
      <div className="App">
        <Navigation />
        <Route exact path="/" render={()=><Home setPath={setPath}/>} />
        <Route exact path="/login" render={()=><Login path={path} setToken={setToken} />} />
        <Route exact path="/register" component={Register}/>
		    <Route exact path="/cases/closed" render={()=><ClosedCases setPath={setPath} />}/>
		    <Route path="/cases/categeories/:categeory" render={()=><CaseSearch setPath={setPath} />} />
        <Route exact path = "/cases/:id" />
        <Route exact path="/update" component={Update} setToken={setToken}/>
        {/* <Route exact path="/cases/create" component={AddNewCase} /> */}

      </div>
    </>
  );
};

export default App;
