import React, { useState, useEffect } from "react";
import weatherTypes from "../weather-types";
import WeatherDisplay from "./WeatherDisplay";

require("dotenv").config();

const Weather = ({ latLng }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeather = async ({ lat, lng }) => {
      const res = await fetch(
        `${process.env.REACT_APP_OPENWEATHER_DOMAIN}onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      const data = await res.json();

      const resultId =
        data.current.weather[0].id > 800
          ? 900
          : Math.floor(data.current.weather[0].id / 100) * 100;

      const weather = weatherTypes[resultId];
      setWeather({ ...weather, id: resultId });
    };

    getWeather(latLng);
  }, [latLng]);

  return (
    <div className="weather">
      {/* TODO : conditionally render class for background-color based on weather */}
      {weather.id && <WeatherDisplay weatherId={weather.id}></WeatherDisplay>}
      <div className="weather-display"></div>
      <h2>{weather.name}</h2>
      <h4>{weather.desc}</h4>
    </div>
  );
};

export default Weather;
