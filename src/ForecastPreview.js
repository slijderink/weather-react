import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="col-6 col-md-2">
      <span className="time">{hours()} </span>
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
