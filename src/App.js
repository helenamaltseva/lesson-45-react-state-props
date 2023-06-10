import React from "react";
import { BsCloudSun } from "react-icons/bs";

//container
import WeatherGrid from "./container/WeatherGrid";

//components
import WeatherCard from "./components/WeatherCard";


function App() {
  return (
    <div className="App">
      <WeatherGrid>
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<BsCloudSun/>}
          color="red"
          // className="lsn-weather-card_color-red" 
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<BsCloudSun/>}
          color="orange" 
        />
        <WeatherCard
          title="Lisbon"
          temperature="21°C"
          icon={<BsCloudSun/>}
          className="lsn-weather-card_color-pink" 
        />
      </WeatherGrid>
    </div>
  );
}

export default App; 
