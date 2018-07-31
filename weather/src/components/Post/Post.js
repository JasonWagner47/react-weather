import React from 'react';


const post = (props) => (
   
     <article>
        <h1>Curret Temp: {props.current}</h1>
        <h1>High: {props.high} </h1>
        <h1>Low: {props.low}</h1>
        <h1>Conditions {props.conditions}</h1>
    </article>
);

export default post;