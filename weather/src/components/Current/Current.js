import React from 'react';


const current = (props) => (


    <div className="current-weather-wrapper">
        <div className="currrent-conditions">
            {props.conditions}
        </div>
        <div className="current-temp">
            {props.temp}&deg;
        </div>
    </div>
);

export default current;