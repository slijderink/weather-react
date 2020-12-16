import React, {useState} from "react"



export default function WeatherUnits(props){
    const [unit,setUnit]=useState('celsius');

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

    if (unit==='celsius'){
    return(
<span className="units">
     <span >{Math.round(props.celsius)}</span>
     <span className="active">°C|<a href="/" onClick={convertToFahrenheit}>F</a>°</span>
</span>);
} else {
    return (
<span className="units">
     <span  >{Math.round(props.celsius)}</span>
     <span className="active"><a href="/" onClick={convertToCelsius}>°C
     </a>°|F°</span>
</span>);
}
}


