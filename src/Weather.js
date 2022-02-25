import React from "react";
<<<<<<< HEAD

import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  render() {
    let forecast = this.props.forecast;
    return (
      <>
        <ListGroup.Item> {forecast.date}: Low of {forecast.low}, and a High of {forecast.high}, with {forecast.description}</ListGroup.Item>
      </>
    );
  }
}

=======
import WeatherDay from "./WeatherDay";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
 
  getListItemArray = () => {
    let result = [];
    this.props.weatherData.data.forEach((data) => {
      result.push(
        <WeatherDay data={data} key={data.date}/>
      );
    })
    return result;
  }
  render() {
    return (
      <>
        <ListGroup.Item key="weather-section">
          <strong>3-Day Forecast</strong>
        </ListGroup.Item>
        {this.getListItemArray()}
      </>
    );
  }
}

>>>>>>> 20c55cf5d0276889aa245e99d31e68cf4624ccd2
export default Weather;