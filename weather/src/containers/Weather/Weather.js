import React, { Component } from 'react';
import axios from 'axios';
import Forecast from '../../components/Forecast/Forecast';
import Current from '../../components/Current/Current';
import Search from '../../components/Search/Search';
import moment from 'moment';


const country = 'USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';


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
        this.setState({ error: false });

        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + e.target.elements.city.value + ',' + country + '&units=imperial&appid=' + ApiKey)


            //promise
            .then(response => {
                console.log(response);
                const data = response.data.list;
                const input_location = response.data.city.name;
                const five_forecasts = [];
                const first_forecast = [];

                //create today's forecast
                first_forecast.push(data[0]);

                //create five day and parse out the every three hours 8 * 3 = 24
                for (let i = 0; i < data.length; i++) {

                    if (i % 8 === 0) {
                        five_forecasts.push(data[i]);
                    }
                }

                this.setState({
                    forecasts: five_forecasts,
                    current: first_forecast,
                    location: input_location 
                });
            })
            .catch(error => {
                console.log('[this is the error] ' + error);
                this.setState({
                    error: true,
                    location: ''
                });
            });
    }


    render() {
        let forecasts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error || this.state.city) {
            forecasts = this.state.forecasts.map(forecast => {
                const day = moment.unix(forecast.dt);


                return <Forecast
                    key={forecast.dt}
                    day={day.format('dddd')}
                    high={Math.round(forecast.main.temp_max)}
                    low={Math.round(forecast.main.temp_min)}
                    conditions={forecast.weather[0].description}
                    icon={forecast.weather[0].icon} />;
            });

        }


        let current = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error || this.state.city) {
            current = this.state.current.map(current => {
                return <Current
                    key={current.dt}
                    temp={Math.round(current.main.temp)}
                    conditions={current.weather[0].description}
                    icon={current.weather[0].icon} />;
            });

        }
        return (
            <div>
                <Search getWeather={this.getWeather} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{this.state.location}</h1>
                        </div>
                    </div>
                </div>
                {current}
                {forecasts}
            </div>

        );
    }
}

export default Weather;