import React from 'react';


const forecast = (props) => (


     <article>
        <h1>Location: {props.location}</h1>
        <h1>Day: {props.day}</h1>
        <h1>Dooms Day: {props.doomsday}</h1>
        <h1>High: {props.high} </h1>
        <h1>Low: {props.low}</h1>
        <h1>Conditions {props.conditions}</h1>
        <img className="image" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />
    </article>
);

export default forecast;