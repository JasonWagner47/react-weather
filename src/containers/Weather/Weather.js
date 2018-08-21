import React, { Component } from 'react';
import { connect  } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Forecast from '../../components/Forecast/Forecast';
import Current from '../../components/Current/Current';
import Search from '../../components/Search/Search';
import { titleCase } from '../../helpers/helpers';

const country = 'USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';

class Weather extends Component {
  state = {
    posts: [],
    forecasts: [],
    current: [],
    city: null,
    location: '',
    error: false,
  };

  getWeatherByCityName = async (cityName) => {
    this.setState({ error: false });
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/forecast?q=' +
          cityName +
          ',' +
          country +
          '&units=imperial&appid=' +
          ApiKey,
      )

      //promise
      .then((response) => {
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
          location: input_location,
        });
      })
      .catch((error) => {
        console.log('[this is the error] ' + error);
        this.setState({
          error: true,
          location: '',
        });
      });
  };

  //toDo lifecycle hook
  getWeather = async (e) => {
    e.preventDefault();
    this.getWeatherByCityName(e.target.elements.city.value);
  };

  componentDidMount() {
      this.getWeatherByCityName('Denver');
  }

  render() {
    let forecasts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.props.error || this.props.city) {
      forecasts = this.props.forecasts.map((forecast) => {
        const day = moment.unix(forecast.dt);

        //this is pulling the high and low for every three hours, when the high and low are the same number in such a small window it appears to be a bug. I am pulling the correct data point, but subtracted - 8 for UX prototype
        return (
          <Forecast
            key={forecast.dt}
            day={day.format('dddd')}
            high={Math.round(forecast.main.temp_max)}
            low={Math.round(forecast.main.temp_min) - 8}
            conditions={titleCase(forecast.weather[0].description)}
            icon={forecast.weather[0].icon}
          />
        );
      });

      const current = this.props.current.map((current) => {
        return (
          <Current
            key={current.dt}
            temp={Math.round(current.main.temp)}
            conditions={titleCase(current.weather[0].description)}
            icon={current.weather[0].icon}
          />
        );
      });

      return (
        <div className="container-fluid weather-wrapper">
          <div className="logo">React Weather&deg;</div>
          <div className="row current-weather">
            <div className="col-md-4">
              <h1>{this.props.location}</h1>
              {current}
            </div>
            <div className="col-md-8 weather-form">
              <Search getWeather={this.getWeather} />
            </div>
          </div>
          <div className="row five-day-forecast">
            <div className="five-day-forecast-title">Five Day Forecast</div>
            {forecasts}
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid weather-wrapper">
        <div className="logo">React Weather</div>
        <div className="my-3">Hmmmm....do you mind searching for a city again?</div>
        <Search getWeather={this.getWeather} />
      </div>
    );
  }
}

// After the Class it common praactice to create a const called "mapStatetoProps" expects state and returns JS object that maps. It should return key:value states
// TODO find out best practices on naming convention when converting and returning states to HOC props?
const mapStateToProps = state => {
  return {
    posts: state.posts,
    forcasts: state.forecast,
    current: state.current,
    city: state.city,
    location: state.location,
    error: state.error
  };
};

//for atomic we can tell 'connect' which slice of state and which actions to dispatch
export default connect( mapStateToProps )(Weather);
