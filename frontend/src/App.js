import React,{useState} from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import  Home  from "./components/home/index";
import ClosedCases from "./components/closedCases/ClosedCases"

//import AvaliableCases from "./components/AvaliableCase"

import About from './components/About/About'
import Login from './components/auth/login/index'
import Register from './components/auth/register/index'


const App = () => {
  const [path, setPath] = useState("");
  return (
    <>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />


		<Route exact path="/cases/closed" render={()=><ClosedCases setPath={setPath}/>}/>

		{/* <Route exact path="/cases/categeories/" render={()=><AvaliableCases setPath1={setPath1}/>}/> */}
      </div>
    </>
  );
};

export default App;
