import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <React.Fragment>
      <span className="lastUpdate">
        <p>
          {" "}
          Last update: <FormattedDate date={props.data.date} />
        </p>
      </span>
      <h2>
        <WeatherUnits celsius={props.data.degrees} />

        <WeatherIcon code={props.data.icon} className="icon" />
      </h2>

      <div className="row">
        <div className="city col-12 col-md-7 text-center text-md-left">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-12 col-md-5 text-center text-md-left">
          <ul>
            <li className="text-capitalize"> {props.data.description}</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
