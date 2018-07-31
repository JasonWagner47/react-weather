import React, { Component } from 'react';
import axios from 'axios';
import Forecast from '../../components/Forecast/Forecast';
import moment from 'moment';

const city = 'Denver';
const country ='USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';

class Weather extends Component {
    state = {
        posts: [],
        forecasts: [],
        error: false
    }
    //lifecycle hook
    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&units=imperial&appid=' + ApiKey)
     

        //promise
        .then(response => {
           
            const posts = response.data.list;
            const forecasts= [];

            for (let i = 0; i < posts.length; i++){

                if (i % 8 === 0){
                    forecasts.push(posts[i]);
                } 
            }

            console.log(forecasts);

            this.setState({forecasts: forecasts});
                //do something
            } )
            .catch(error => {
                console.log('[this is the error] ' + error);
                this.setState({error: true});
            });
    }

    render () {
        let forecasts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            forecasts = this.state.forecasts.map(forecast => {
                const day = moment.unix(forecast.dt);
                return <Forecast
                
                key={forecast.dt}
                day={day.format('dddd h:mm A')}
                doomsday={forecast.main.temp  + 10}
                high={forecast.main.temp_max} 
                low={forecast.main.temp_min}
                conditions={forecast.weather[0].description}
                icon={forecast.weather[0].icon}/>; 
            });
    
        }
        return (
            <div className="Container">
            <h1>
              {forecasts}
            </h1>
            </div>
     
        );
    }
}

export default Weather;