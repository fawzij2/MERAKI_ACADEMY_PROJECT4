import React,{useState} from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import  Home  from "./components/home/index";

const App = () => {
  const [path, setPath] = useState("/");
  return (
    <>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
		{/* <Route exact path="/cases/closed" render={()=><ClosedCases setPath={setPath}/>}/> */}
      </div>
    </>
  );
};

export default App;
