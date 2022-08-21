import "./City-Table.css";
import React from "react";
import { cityArray } from "../Citys/Citys";
const stylePic = {width:"10vw"}
function CityTable() {
  return (
    <div className="city-table">
      <h1>City-Table</h1>

      <table>
        <thead>
          <th>City Name:</th>
          <th>Number Population:</th>
          <th>Numbers Streets:</th>
          <th>Have Beach:</th>
          <th>Symbol:</th>
        </thead>
        <tbody>
          {cityArray.map((city) => {
            return (
              <tr>
                <td>{city.City_Name}</td>
                <td>{city.numbersOfPopulation}</td>
                <td>{city.numbersOfStreets}</td>
                <td>{city.doseItHaveBeach}</td>
                <img src={city.citySymbol} alt="" style={stylePic} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CityTable;
