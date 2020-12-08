import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner'

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`)
    }
    let apiKey = "4ab5028f202d824f0f01ee605dd0d893";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />)
}