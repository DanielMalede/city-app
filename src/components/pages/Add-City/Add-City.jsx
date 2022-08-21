import "./Add-City.css";
import React, { useState } from "react";

function AddCity({
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

  const getCityName = (e)=>setCityName(e.target.value)
  const getNumOfPopulation = (e)=>setNumOfPopulation(e.target.value)
  const getNumOfStreets = (e)=>setNumOfStreets(e.target.value)
  const getDoseItHaveABeach = (e)=>setdoseItHaveABeach(e.target.value)
  const getSymbol = (e)=>setSymbol(e.target.value)
  const printToLog = ()=>console.log(cityName ,numOfPopulation,numOfStreets,doseItHaveABeach,symbol) 
  const keepFormInfo = (e)=>e.preventDefault()
  return (
    <div className="add-city">
      <h1>Add-City</h1>
      <form onSubmit={keepFormInfo}>
        <input type="text" onChange={(e)=>getCityName(e)}/>
        <br />
        <input type="text" onChange={(e)=>getNumOfPopulation(e)}/>
        <br />
        <input type="text" onChange={(e)=>getNumOfStreets(e)}/>
        <br />
        <input type="text" onChange={(e)=>getDoseItHaveABeach(e)}/>
        <br />
        <input type="text" onChange={(e)=>getSymbol(e)}/>
        <br />
        <button onClick={printToLog}>Click To Print</button>
      </form>
    </div>
  );
}

export default AddCity;
