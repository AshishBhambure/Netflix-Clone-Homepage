import "./App.css";
import { useState } from "react";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5  from "./components/Section5";
import Seprator from "./components/Seprator";
import Section1 from "./components/Section1";
import Section6 from "./components/Section6";
import Fotter from "./components/Fotter";
function App() {
   
 return(
  <div   className=" bg-black text-white ">
    <div className="  ">
      <Section1></Section1>
      <Seprator></Seprator>
      <Section2></Section2>
      <Seprator></Seprator>
      <Section3></Section3>
      
      <Seprator></Seprator>
      
      
      <Section4></Section4>
      <Seprator></Seprator>
      <Section5></Section5>
      <Seprator></Seprator>
      <Section6/>
      <Seprator></Seprator>
      <Fotter></Fotter>

    </div>
      

  </div>
 )
}

export default App;
