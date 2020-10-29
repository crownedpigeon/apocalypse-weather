import React, { useState, useEffect, useCallback } from "react";
import Geocode from "react-geocode";
require("dotenv").config();

Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);

const GeoForm = ({ setLatLng }) => {
  const [value, setValue] = useState("");

  //useCallback to memoize the function
  const getLatLng = useCallback(address => {
    if (!address) {
      try {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setLatLng({ lat, lng });
          Geocode.fromLatLng(lat, lng).then(
            res => {
              const address = `${res.results[0].address_components[2].long_name}, ${res.results[0].address_components[4].short_name}`;
              setValue(address);
            },
            error => console.log(error)
          );
        });
      } catch {
        setLatLng(null);
      }
    } else {
      Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatLng({ lat, lng });
        },
        error => console.error(error)
      );
    }
  }, []);

  useEffect(() => {
    getLatLng(value);
  }, []);

  const handleSubmit = e => {
    getLatLng(value);
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        {" "}
        <input
          className="input"
          type="text"
          value={value}
          placeholder="Enter a city to get the weather"
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default GeoForm;
