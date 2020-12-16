import React, {useState} from "react"

export default function WeatherUnits(props){
    const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit(){
    return (props.celsius*9/5)+32;
}

    if (unit==="celsius"){
    return(
<span className="units">
     <span>{Math.round(props.celsius)}</span>
     <span className="displayUnits"> °C| <a href="/" onClick={showFahrenheit}>°F</a></span>
</span>);
} else {
    return (
<span className="units">
     <span>{Math.round(fahrenheit())}</span>
     <span className="displayUnits"><a href="/" onClick={showCelsius}>°C
     </a>°|F°</span>
</span>);
}
}


