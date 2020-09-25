import React, { useEffect } from "react";
require("dotenv").config();

const WeatherDisplay = ({ latLng }) => {
  useEffect(() => {
    const getWeather = async ({ lat, lng }) => {
      const res = await fetch(
        `${process.env.REACT_APP_OPENWEATHER_DOMAIN}onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
    };

    getWeather(latLng);
  }, []);

  const apocalypticWeather = {
    200: "death reigns from above",
    300: "blood rain",
    500: "toxic rain",
    600: "post-nuclear cold front",
    620: "blizzards"
  };

  return <h2>{latLng.lat}</h2>;
};

export default WeatherDisplay;
