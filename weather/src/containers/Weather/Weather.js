import React, { Component } from 'react';
import axios from 'axios';
import Forecast from '../../components/Forecast/Forecast';
import Search from '../../components/Search/Search';
import moment from 'moment';


const country ='USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';


class Weather extends Component {
    state = {
        posts: [],
        forecasts: [],
        city: null,
        location: '',
        error: false
    }

    //toDo lifecycle hook
    getWeather = async (e) => {
        e.preventDefault();
         this.setState({error: false});

        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + e.target.elements.city.value + ',' + country + '&units=imperial&appid=' + ApiKey)
       

        //promise
        .then(response => {
           
            const posts = response.data.list;
            const location = response.data.city.name;
            const forecasts= [];

            this.setState({
                location: location
            });
            console.log(location);

            for (let i = 0; i < posts.length; i++){

                if (i % 8 === 0){
                    forecasts.push(posts[i]);
                    
                } 
            }

            this.setState({forecasts: forecasts});
                //do something
            } )
            .catch(error => {
                console.log('[this is the error] ' + error);
                this.setState({
                    error: true,
                    location: ''
                });
            });
    }

    render () {
        let forecasts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error || this.state.city) {
            forecasts = this.state.forecasts.map(forecast => {
                const day = moment.unix(forecast.dt);
                return <Forecast
                location={this.state.location}
                key={forecast.dt}
                day={day.format('dddd')}
                doomsday={forecast.main.temp  + 10}
                high={forecast.main.temp_max} 
                low={forecast.main.temp_min}
                conditions={forecast.weather[0].description}
                icon={forecast.weather[0].icon}/>; 
            });
    
        }
        return (
            <div className="Container">
             <Search getWeather={this.getWeather}/>
              {forecasts}
            </div>
     
        );
    }
}

export default Weather;