import React, { useState } from "react";
import GeoForm from "./components/GeoForm";
import WeatherDisplay from "./components/WeatherDisplay";

import "./App.css";

const App = () => {
  //1. have an input, type in a city
  //2. hit the google maps geocoding api. convert city to lat + long
  //3. pass lat+long to the weather api. get weather data.
  //4. look at weather code, find its correspondant in our "apocalyptic" weather
  //5. display the apocalyptic weather

  //6. keep the box to search city's, but automatically 'get' user's location and display weather for it

  const [latLng, setLatLng] = useState(null);

  return (
    <div className="app">
      <main>
        <div className="search-box">
          {/* form goes here */}
          <GeoForm setLatLng={setLatLng} />
        </div>
        {/* display goes here  -- currently only shows once we have latLng*/}
        {latLng && <WeatherDisplay latLng={latLng} />}
      </main>
    </div>
  );

  //all things with address + lat/long go into a component
  //all things that deal with weather api and formatting/displaying weather data go into a component
};

export default App;
