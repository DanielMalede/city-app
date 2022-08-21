import "./Citys.css";
import React from "react";
import CityInfo from "../City-Info/City-Info";

export const cityArray = [
  {
    City_Name: "Haifa",
    numbersOfPopulation: 10000,
    numbersOfStreets: 150,
    doseItHaveBeach: "true",
    citySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Haifa.svg/500px-Coat_of_arms_of_Haifa.svg.png",
  },
  {
    City_Name: "Tel-aviv",
    numbersOfPopulation: 12540,
    numbersOfStreets: 200,
    doseItHaveBeach: "true",
    citySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Emblem_of_Tel_Aviv.svg/330px-Emblem_of_Tel_Aviv.svg.png",
  },
  {
    City_Name: "Afula",
    numbersOfPopulation: 411505,
    numbersOfStreets: 1000,
    doseItHaveBeach: "false",
    citySymbol: "https://upload.wikimedia.org/wikipedia/he/thumb/3/31/Afula_COA.svg/600px-Afula_COA.svg.png?20141118173332",
  },
  {
    City_Name: "Aco",
    numbersOfPopulation: 50504,
    numbersOfStreets: 150,
    doseItHaveBeach: "false",
    citySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Acre%2C_Israel.svg/300px-Coat_of_arms_of_Acre%2C_Israel.svg.png",
  },
  {
    City_Name: "Ashkelon",
    numbersOfPopulation: 215052,
    numbersOfStreets: 230,
    doseItHaveBeach: "true",
    citySymbol: "https://upload.wikimedia.org/wikipedia/he/thumb/c/cf/Ashkelon_COA.svg/769px-Ashkelon_COA.svg.png?20141118222223",
  },
];
function Citys() {
  return (
    <div className="citys">
      <h1>Citys</h1>
      {
        cityArray.map(()=>{return<CityInfo/>})
      }
    </div>
  );
}

export default Citys;
