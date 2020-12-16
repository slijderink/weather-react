import React, {useState} from "react"



export default function WeatherUnits(props){
    const [unit,setUnit]=useState('celsius');
    if (unit==='celsius'){
    return(
<div className="WeatherUnits">
     <span className="units" >{Math.round(props.celsius)}</span>
     <span className="unit">°C|<a href="/">F</a>°</span>
</div>);
} else {
    return "F"
}




}