import "./City-Info.css";
import React, { useState } from "react";
function CityInfo({CityName,NumOfPopulation,NumOfStreets,DoseItHaveABeach,Symbol}) {

  const [cityName,setCityName]=useState(CityName)
  const [numOfPopulation,setNumOfPopulation]=useState(NumOfPopulation)
  const [numOfStreets,setNumOfStreets]=useState(NumOfStreets)
  const [doseItHaveABeach,setdoseItHaveABeach]=useState(DoseItHaveABeach)
  const [symbol,setSymbol]=useState(Symbol)
  return (
    <div className="city-info">
      <h1>City-Info</h1>
      <h6>{cityName}</h6>
      <h6>{numOfPopulation}</h6>
      <h6>{numOfStreets}</h6>
      <h6>{doseItHaveABeach}</h6>
      <img src={symbol} alt="" />
    </div>
  );
};

export default CityInfo;
