import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
    return (
         <React.Fragment>
    <div className="row">
          <div className="col-8">
            <span className="lastUpdate">
              <p> Last update: <FormattedDate date={props.data.date}/></p>
            </span>
          </div>
          <div className="col-4">
            <span className="currentTime"></span>
          </div>
        </div>
        
            <h2>

          <WeatherUnits celsius={props.data.degrees}/>
        
          <WeatherIcon code={props.data.icon} className="icon"/>
        </h2>
        
        <div className="row">
          <div className="col-7">
            <h1>{props.data.city}</h1>
          </div>
          <div className="class-5">
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