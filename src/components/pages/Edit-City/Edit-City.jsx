import "./Edit-City.css";
import React, { useState } from "react";

function EditCity({
  CityName,
  NumOfPopulation,
  NumOfStreets,
  DoseItHaveABeach,
  Symbol,
}) {
  const [cityName, setCityName] = useState(CityName);
  const [numOfPopulation, setNumOfPopulation] = useState(NumOfPopulation);
  const [numOfStreets, setNumOfStreets] = useState(NumOfStreets);
  const [doseItHaveABeach, setdoseItHaveABeach] = useState(DoseItHaveABeach);
  const [symbol, setSymbol] = useState(Symbol);

  const getCityName = (e) => {setCityName(e.target.value)
  if (cityName!==e.target.value&&""!==e.target.value) {
    document.getElementById("cityNameAlert").style.color="red"
    document.getElementById("cityNameAlert").innerHTML="value has change"
  }
  else{
  document.getElementById("cityNameAlert").style.color="green"
  document.getElementById("cityNameAlert").innerHTML="value is good"
}} ;
  const getNumOfPopulation = (e) => {setNumOfPopulation(e.target.value)
    if (numOfPopulation!==e.target.value&&""!==e.target.value) {
      document.getElementById("PopulationAlert").style.color="red"
      document.getElementById("PopulationAlert").innerHTML="value has change"
    }
    else{
    document.getElementById("PopulationAlert").style.color="green"
    document.getElementById("PopulationAlert").innerHTML="value is good"
  }};
  const getNumOfStreets = (e) => {setNumOfStreets(e.target.value)
    if (numOfStreets!==e.target.value&&""!==e.target.value) {
      document.getElementById("StreetsAlert").style.color="red"
      document.getElementById("StreetsAlert").innerHTML="value has change"
    }
    else{
    document.getElementById("StreetsAlert").style.color="green"
    document.getElementById("StreetsAlert").innerHTML="value is good"
  }};
  const getDoseItHaveABeach = (e) => {setdoseItHaveABeach(e.target.value)
    if (doseItHaveABeach!==e.target.value&&""!==e.target.value) {
      document.getElementById("DoseItHaveABeachAlert").style.color="red"
      document.getElementById("DoseItHaveABeachAlert").innerHTML="value has change"
    }
    else{
    document.getElementById("DoseItHaveABeachAlert").style.color="green"
    document.getElementById("DoseItHaveABeachAlert").innerHTML="value is good"
  }};
  const getSymbol = (e) => {setSymbol(e.target.value)
    if (doseItHaveABeach!==e.target.value&&""!==e.target.value) {
      document.getElementById("SymbolAlert").style.color="red"
      document.getElementById("SymbolAlert").innerHTML="value has change"
    }
    else{
    document.getElementById("SymbolAlert").style.color="green"
    document.getElementById("SymbolAlert").innerHTML="value is good"
  }};
  const chackIFformIsFull = () => {
    let stateArray = [cityName, numOfPopulation, numOfStreets, doseItHaveABeach, symbol];
    let PorpsArray = [CityName,NumOfPopulation,NumOfStreets,DoseItHaveABeach,Symbol];
    let x = "";
    stateArray.map((item, index) => {
      if (item === PorpsArray[index] || item === "") {
        x = "out";
      }
    });
     if (x === "out") {
      alert("Please fill all inputss");
    } else {
      alert("good");
    }
  };
  const keepFormInfo = (e) => e.preventDefault();
  return (
    <div className="edit-city">
      <h1>Edit-City</h1>
      <h6>{cityName}</h6>
      <h6>{numOfPopulation}</h6>
      <h6>{numOfStreets}</h6>
      <h6>{doseItHaveABeach}</h6>
      <img src={symbol} alt="" />
      <form onSubmit={keepFormInfo}>
        <input type="text" onChange={(e) => getCityName(e)} />
        <br />
        <span id="cityNameAlert"></span>
        <br />
        <input type="text" onChange={(e) => getNumOfPopulation(e)} />
        <br />
        <span id="PopulationAlert"></span>
        <br />
        <input type="text" onChange={(e) => getNumOfStreets(e)} />
        <br />
        <span id="StreetsAlert"></span>
        <br />
        <input type="text" onChange={(e) => getDoseItHaveABeach(e)} />
        <br />
        <span id="DoseItHaveABeachAlert"></span>
        <br />
        <input type="text" onChange={(e) => getSymbol(e)} />
        <br />
        <span id="SymbolAlert"></span>
        <br />
        <button onClick={chackIFformIsFull}>Click To Print</button>
      </form>
    </div>
  );
}

export default EditCity;
