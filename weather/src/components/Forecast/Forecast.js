import React from 'react';


const forecast = (props) => (

    <div className="col-xs-12 col-sm-6 col-md-2 px-3 px-lg-0 forecast-card">
        <div>
            <h2>
                {props.day}
            </h2>
            <div className="forecast-icon">
                <img className="image" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />
            </div>
            <div>
                {props.conditions}
            </div>
            <div className="forecast-high">
                High: {props.high}
            </div>

            <div className="forecast-low">
                Low: {props.low}
            </div>

        </div>
        </div>

        );
        
export default forecast;