import React from 'react';


const current = (props) => (


    <div>
        <div className="currrent-conditions">
            {props.conditions}
        </div>
        <div className="current-temp">
            {props.temp}&deg;
        </div>
    </div>
);

export default current;