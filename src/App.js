import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import axios from "axios";

import { Cards, Chart, CountryPicker } from "./components";

export default function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [historicalsData, setHistoricalData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const requests = [
      "https://disease.sh/v3/covid-19/countries",
      "https://disease.sh/v3/covid-19/all",
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
    ];
    Promise.all(requests.map((request) => axios.get(request))).then(
      ([{ data: countries }, { data: global }, { data: historical }]) => {
        setCountriesData(countries);
        setGlobalData(global);
        setHistoricalData(historical);
      }
    );
  };

  const check = () => {
    console.log(globalData);
  };
  
  return (
    <div>
      <header>
        <h1>🦠 COVID-19 Tracker</h1>
        <p>Track the spread of the Coronavirus Covid-19 outbreak </p>
      </header>
      <Cards globalData={globalData} />
      <button onClick={check}>Show data</button>
    </div>
  );
}
