import React from 'react';

const forecast = (props) => (
  <div className="col-xs-12 col-sm-6 col-md px-3 forecast-card">
    <div className="d-inline forecast-day">
      <h2 className="d-inline">{props.day}</h2>
    </div>
    <div className="d-inline forecast-icon">
      <img className="image" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />
    </div>
    <div>{props.conditions}</div>
    <div className="forecast-high">High: {props.high}&deg;</div>
    <div className="forecast-low">Low: {props.low}&deg;</div>
  </div>
);

export default forecast;
