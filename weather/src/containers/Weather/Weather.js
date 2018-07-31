import React, { Component } from 'react';
import Card from '../../components/Card/Card';
// import NewCard from '../../components/NewCard/NewCard';
// import './Weather.css';

class Weather extends Component {
    state = {
        error: false
    }

    componentDidMount () {
       
    }
    
    render () {
        return (
            <div> Yo
                <Card />
            </div>
        );
    }
}

export default Weather;