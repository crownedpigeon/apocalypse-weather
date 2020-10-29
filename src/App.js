import React, { useState } from "react";
import GeoForm from "./components/GeoForm";
import Weather from "./components/Weather";

import "./App.css";

const App = () => {
  const [latLng, setLatLng] = useState(null);

  return (
    <div className="app">
      <main>
        {/* form goes here */}
        <GeoForm setLatLng={setLatLng} />
        {/* display goes here  -- currently only shows once we have latLng*/}
        {/* TODO: show loading icon when we do not have latLng */}
        {latLng ? <Weather latLng={latLng} /> : <div>loading</div>}
      </main>
    </div>
  );
};

export default App;
