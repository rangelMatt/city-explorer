import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render () {
    return (
      <ListGroup.Item>
        {this.props.day.date}: {this.props.day.description}
      </ListGroup.Item>
    )
  }
}

export default WeatherDay;

