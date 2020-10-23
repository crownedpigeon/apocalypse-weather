import React, { useState } from "react";
import GeoForm from "./components/GeoForm";
import Weather from "./components/Weather";

import "./App.css";

const App = () => {
  const [latLng, setLatLng] = useState(null);

  // TODO: move weather state to App so we can change class based on weather
  //TODO: some indication that we have gotten new weather data for a new location--even if the weather is the same.
  //TODO: make sure size of svg sis consistent
  //TODO: automatically user's location and  their weather as default

  return (
    <div className="app">
      <main>
        {/* form goes here */}
        <GeoForm setLatLng={setLatLng} />

        {/* display goes here  -- currently only shows once we have latLng*/}
        {latLng && <Weather latLng={latLng} />}
      </main>
    </div>
  );

  //all things with address + lat/long go into a component
  //all things that deal with weather api and formatting/displaying weather data go into a component
};

export default App;
