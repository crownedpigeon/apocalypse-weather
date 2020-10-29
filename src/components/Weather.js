import React, { useState, useEffect } from "react";
import weatherTypes from "../weather-types";
import WeatherDisplay from "./WeatherDisplay";

require("dotenv").config();

const Weather = ({ latLng }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeather = async ({ lat, lng }) => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_OPENWEATHER_DOMAIN}onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        const data = await res.json();
        const resultId =
          data.current.weather[0].id > 800
            ? 900
            : Math.floor(data.current.weather[0].id / 100) * 100;

        const newWeather = weatherTypes[resultId];

        resultId !== weather.id && setWeather({ ...newWeather, id: resultId });
      } catch (e) {
        console.log(e);
      }
    };

    getWeather(latLng);
  }, [latLng]);

  return (
    <div className="weather">
      {weather.id && <WeatherDisplay weather={weather}></WeatherDisplay>}
      <div className="weather-display"></div>
      <h2>{weather.name}</h2>
      <h4>{weather.desc}</h4>
    </div>
  );
};

export default Weather;
