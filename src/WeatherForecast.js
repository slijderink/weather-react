import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    const[loaded,setLoaded]=useState(false);
    const [forecast,setForecast]=useState(null);

function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
}

if (loaded){
    return (
    <div className="weatherForecat row">
      {new Date(forecast.list[0].dt*1000).getHours()}:00
      <WeatherIcon code={forecast.list[0].weather[0].icon}/>
      {Math.round(forecast.list[0].main.temp)}°C     
   </div>);
} 
else {
let apiKey="0958d0742e2cb0db1d2e839284637665";
let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecastResponse);
return null;
}

}