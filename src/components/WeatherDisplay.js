import React, { useState, useEffect } from "react";
import weatherTypes from "../weather-types";
require("dotenv").config();

const WeatherDisplay = ({ latLng }) => {
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

      setWeather(weatherTypes[resultId]);
    };

    getWeather(latLng);
  }, [latLng]);

  return (
    <div className="weather">
      <div className="weather-display"></div>
      <h2>{weather.name}</h2>
      <h4>{weather.desc}</h4>
    </div>
  );
};

export default WeatherDisplay;
