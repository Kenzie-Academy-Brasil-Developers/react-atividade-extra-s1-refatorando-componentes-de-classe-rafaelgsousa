import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

function App() {

    const [weather,setWeather]= useState([]);
    const [city,setCity]= useState("");
  

  const handleChangeWeather = (weatherData, cityData) => {
     setWeather(weatherData);
     setCity(cityData);
  };

    return (
      <div className="App">
        <SearchWeather handleChangeWeather={handleChangeWeather} />
        <DisplayWeather weather={weather} city={city}/>
      </div>
    );
  }

export default App;
