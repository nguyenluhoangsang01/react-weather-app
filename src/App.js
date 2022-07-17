import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { FORECAST_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from "./config";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // latitude and longitude are required
    const [lat, lon] = searchData.value.split(" - ");

    // currentWeather
    fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) =>
        setCurrentWeather({
          city: searchData.label,
          ...data,
        })
      );

    // currentForecast
    fetch(
      `${FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) =>
        setCurrentForecast({
          city: searchData.label,
          ...data,
        })
      );
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
  );
}

export default App;
