import React from "react";
import classNames from "classnames";
// import { BsSun } from "react-icons/bs";

//assets
import "../../assets/styles/components/weatherCard.scss";

function WeatherCard({ title, temperature, icon, className, color = "blue" }) {
  const cardClassNames = classNames(
    "lsn-weather-card",
    `lsn-weather-card_color=${color}`,
    className,
  );
  
  console.log(cardClassNames);

  return (
    <div className={cardClassNames}>
      <p className="lsn-weather-card__title">
        { title }
      </p>
      <div className="lsn-weather-card__info">
        <span className="lsn-weather-card__temperature">
          { temperature }
        </span>
        <span className="lsn-weather-card__icon">
          { icon }
        </span>
      </div>
    </div>
  );
}

export default WeatherCard;
