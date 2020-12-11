import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";
​
export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });
​
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: Math.round(response.data.main.temp),
    });
  }
  function search() {
    let apiKey = "4ab5028f202d824f0f01ee605dd0d893";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
​
    axios.get(apiUrl).then(handleResponse);
  }
​
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
​
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="row">
            <div className="col-8">
              <span className="lastUpdate">
                <p> Last update: {weatherData.date.getDay()}</p>
              </span>
            </div>
            <div className="col-4">
              <span className="currentTime"></span>
            </div>
          </div>
​
          <h2>
            {weatherData.degrees}
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>
              |<a href="/">°F</a>
            </span>
            <img src={weatherData.imgUrl} className="icon" alt="" />
          </h2>
          <div className="row">
            <div className="col-7">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="class-5">
              <ul>
                <li>{weatherData.temperature}</li>
                <li>Humidity:{weatherData.humidity}</li>
                <li>Wind:{weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="row"></div>
​
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
                        onChange={changeCity}
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
          <a
            href="https://github.com/slijderink/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Liza Slijderink
        </small>
      </div>
    );
  } else {
    search();
    return <Loader type="Rings" color="red" height={80} width={80} />;
  }
}
