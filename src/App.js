import Countries from "./components/Countries";
import Statistics from "./components/Statistics";

import './App.css';
import { useState } from "react";

function App() {
 const [ data, setData]= useState("countries");
  return (
    <div className="App">     
      <div className="menu">
        <span>
           <button className="btn" name="countries" onClick={(e)=>setData(e.target.name)}>Countries</button>
        </span>
        <span>
           <button className="btn" name="statistics" onClick={(e)=>setData(e.target.name)}>Statistics</button>
        </span>
      </div>
      <div>
         {(data=="countries")?<Countries/>:<Statistics/>}
      </div>

    </div>
  );
}

export default App;
