import "./City.css";
import React, { useState } from "react";
import CityInfo from "../City-Info/City-Info";
import CityTable from "../City-Table/City-Table";
import AddCity from "../Add-City/Add-City";
import EditCity from "../Edit-City/Edit-City";
// import Citys from "../Citys/Citys";
function City() {

  const [toogle, setToogle] = useState(false);

  const Router=()=>{
    switch (toogle) {
      case true:
        return <CityInfo CityName="Jerusalem" NumOfPopulation="2000000" NumOfStreets="300" DoseItHaveABeach="false" Symbol="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emblem_of_Jerusalem.svg/180px-Emblem_of_Jerusalem.svg.png"/>;
      case false:
        return <CityTable />;
      default:
        break;
    }
  }
  return (
    <div className="city">
      <h1>City</h1>
      <br />
      {/* <button onClick={()=>{setToogle(!toogle)}}>Click Me</button> */}
      {/* <Router/> */}
      {/* <AddCity/> */}
      <EditCity CityName="Jerusalem" NumOfPopulation="2000000" NumOfStreets="300" DoseItHaveABeach="false" Symbol="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emblem_of_Jerusalem.svg/180px-Emblem_of_Jerusalem.svg.png"/>
    </div>
  );
}

export default City;
