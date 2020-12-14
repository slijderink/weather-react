import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
 import Loader from 'react-loader-spinner'

export default function Weather(props) {
const[weatherData,setWeatherData]=useState({ready:false});
const[city,setCity]=useState(props.defaultCity);

function handleResponse(response){
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  wind:response.data.wind.speed,
  city:response.data.name,
  humidity:response.data.main.humidity,
  weather:response.data.main.weather[0].description,
  imgUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  date:"Wednesday 12 December",

});

  setTemperature(response.data.main.temp);
 
}
if (weatherData.ready){
  return (
    <div className="Weather">
      <div className="weather-app">

        <div className="row">
          <div className="col-8">
            <span className="lastUpdate">
              <p> Last update: {weatherData.date}</p>
            </span>
          </div>
          <div className="col-4">
            <span className="currentTime"></span>
          </div>
        </div>

        <h2>
          {weatherData.degrees}
          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>
            |<a href="/">°F</a>
          </span>
          <img src={weatherData.imgUrl} className="icon"></img>
        </h2>
        <div className="row">
          <div className="col-7">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="class-5">
            <ul>
              <li className="text-capitalize"> {weatherData.weather}</li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="row"></div>

        <div className="row">
          <div className="offset-1 col-10">
            <div className="enterCityForm">
              <form>
                <div className="form-row">
                  <div className="col-8">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter city..."
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-primary shadow-sm"
                    />
                  </div>
                  <div className="col-1">
                    <button className="clButton">CL</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/slijderink/weather-react" target="_blank">
          Open-source 
        </a>{" "}
        coded by Liza Slijderink
      </small>
    </div>
  );

} else {
  const apiKey="4ab5028f202d824f0f01ee605dd0d893";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
return (<Loader type="Circles" color="#00BFFF" height={80} width={80}/>

);
}

}