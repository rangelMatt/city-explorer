import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import WeatherDay from "./WeatherDay";

class Movie extends React.component {
  render () {
    return (
      <ListGroup.Item>
        {this.props.movie.title}
      </ListGroup.Item>
    )
  }
}

export default WeatherDay;