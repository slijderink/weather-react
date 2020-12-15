import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    return  (
    <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color= "rgb(24, 23, 23)"
    size={65}
    animate={true}
  />
  );
   
}