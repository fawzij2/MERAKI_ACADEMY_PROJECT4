import React,{useState} from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import  Home  from "./components/home/index";
import About from './components/About/About'

const App = () => {
  const [path, setPath] = useState("/");
  return (
    <>
      <div className="App">
        <Navigation />
        {/* <Route exact path="/" component={Home} /> */}
		{/* <Route exact path="/cases/closed" render={()=><ClosedCases setPath={setPath}/>}/> */}
      </div>

      <About/>
    </>
  );
};

export default App;
