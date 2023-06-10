import React from "react";

//assets
import "../assets/styles/container/weatherGrid.scss";


function WeatherGrid({ children }) {


  return (
    <div className="lsn-weather-grid">
      {children}
    </div>
  );
}

export default WeatherGrid;
