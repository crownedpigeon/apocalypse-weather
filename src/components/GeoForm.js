import React from "react";

// import "./GeoForm.css";

const GeoForm = ({ setLatLng }) => {
  return (
    <form className="form">
      <label>Enter location: </label>
      <input className="input" type="text" />
    </form>
  );
};

export default GeoForm;
