import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Loader from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const[weatherData,setWeatherData]=useState({ready:false});
const[city,setCity]=useState(props.defaultCity);


function handleResponse(response){
setWeatherData({
  ready:true,
  degrees:response.data.main.temp,
  wind:response.data.wind.speed,
  city:response.data.name,
  humidity:response.data.main.humidity,
  description:response.data.main.weather[0].description,
  imgUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  date:new Date(response.data.dt*1000),
});
}

function search(){
  const apiKey="0958d0742e2cb0db1d2e839284637665";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
  setCity(event.target.value);
}

if (weatherData.ready){
  return (
    <div className="Weather">

      <div className="weather-app">

        <WeatherInfo data={weatherData}/>

        <div className="row">
          <div className="offset-1 col-10">
            <div className="enterCityForm">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-8">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter city..."
                      autocomplete="off"
                      onChange={handleCityChange}
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
  search();
return <Loader type="Circles" color="#00BFFF" height={80} width={80}/>;
}
}