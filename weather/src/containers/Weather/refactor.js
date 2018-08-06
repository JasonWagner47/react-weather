import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Forecast from '../../components/Forecast/Forecast';
import Current from '../../components/Current/Current';
import Search from '../../components/Search/Search';
import { titleCase } from '../../helpers/helpers';



const country ='USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';
const ERROR_DISPLAY = <p style={{textAlign: 'center'}}>Something went wrong!</p>;


class Weather extends Component {
    state = {
        posts: [],
        forecasts: [],
        current: [],
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
            console.log(response);
            const data = response.data.list;
            const location_default = response.data.city.name;
            const five_day_forecast= [];
            const current_forecast = [];

            //create today's forecast
            current_forecast.push(data[0]);
           
            //create five day and parse out the every three hours 8 * 3 = 24
            for (let i = 0; i < data.length; i++){

                if (i % 8 === 0){
                    five_day_forecast.push(data[i]);
                } 
            }

            this.setState({
              forecasts: five_day_forecast,
              current: current_forecast,
              location: location_default
            });
            console.log(this.state.current);
            
            })
            .catch(error => {
                console.log('[this is the error] ' + error);
                this.setState({
                    error: true,
                    location: ''
                });
            });

            //  <Current
            //     key={current.dt}
            //     temp={Math.round(this.state.current.main.temp)} 
            //     conditions={current.weather[0].description}
            //     icon={weather[0].icon}/>; 
    }

    render () {
        // let forecasts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

        if (!this.state.error || this.state.city) {
            this.state.forecasts.map(forecast => {
                const day = moment.unix(forecast.dt);

                // console.log(forecast.weather[0].description);
                // const desc = forecast.weather[0].description;
                // const newDesc = desc.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '); 
                // console.log(newDesc);

                return  <Forecast
                key={forecast.dt}
                day={day.format('dddd')}
                high={Math.round(forecast.main.temp_max)} 
                low={Math.round(forecast.main.temp_min)}
                conditions={titleCase(forecast.weather[0].description)}
                icon={forecast.weather[0].icon}/>; 

               
            });

    
        }

            //todo only one retyrb
        return (
                <div>
                 
                    <Search getWeather={this.getWeather}/>
                     
                     <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{this.state.location}</h1>
                            </div>
                        </div>
                    </div>
                    {this.state.current.length ? this.state.current : ERROR_DISPLAY}
                    {this.state.forecasts.length ? this.state.forecasts : ERROR_DISPLAY}
                </div>
     
        );
    }
}

export default Weather;