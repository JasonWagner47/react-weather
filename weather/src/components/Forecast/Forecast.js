import React from 'react';


const forecast = (props) => (

    <div className="container forecast-card">

        <div className="row">
            <div className="col-md-12">
                <div>
                    <h2>
                        {props.day}
                        <img className="image" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />
                    </h2>
                </div>
                <div>
                    {props.conditions}
                </div>
                <div>
                    High: {props.high}
                </div>

                <div>
                    Low: {props.low}
                </div>

            </div>
        </div>
    </div>
);

export default forecast;