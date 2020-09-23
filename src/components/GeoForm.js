import React from "react";
import Geocode from "react-geocode";
require("dotenv").config();
// import "./GeoForm.css";
console.log(process.env);
Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);

const GeoForm = ({ setLatLng }) => {
  const getLatLng = () => {
    Geocode.fromAddress("Atlanta").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => console.error(error)
    );
  };

  getLatLng();

  return (
    <form className="form">
      <label>Enter location: </label>
      <input className="input" type="text" />
    </form>
  );
};

export default GeoForm;
