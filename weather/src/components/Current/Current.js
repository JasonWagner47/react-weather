import React from 'react';


const current = (props) => (

    <div className="container">

        <div className="row">
            <div className="col-md-12">
                <div className="currrent-temp">
                   {props.conditions}
                </div>
    
                <h2>
                    {props.temp}
                    <img className="image" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />
                </h2>
  
            </div>
        </div>
    </div>
);

export default current;