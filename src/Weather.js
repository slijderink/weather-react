import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dronten",
    date: "Tuesday 5 December",
    humidity: "55%",
    weather: "Sunny",
    wind: "7",
    degrees: "21",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  };
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
              <li>{weatherData.weather}</li>
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
        <a href="https://github.com/slijderink/" target="_blank">
          Open-source 
        </a>{" "}
        coded by Liza Slijderink
      </small>
    </div>
  );
}