import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import axios from "axios";

import Map from "./Map"

const SERVER = process.env.REACT_APP_SERVER

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      renderError: false,
      errorMessage: '',
      searchQuery: '',
      weatherData: [],
      lat: 0,
      lon: 0,
      weather: undefined,
      movies: undefined,
    };
  }


  requestData = async (e) => {
    try {
      let locationIqData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`)
      this.setState({
        locationData: locationIqData.data[0],
      })
      console.log(this.state.locationData)
    } catch (error) {
      console.log('Wrongo, thats incorrect')
    }
    this.getWeather();
  }
  getWeather = async () => {
    try {
      let results = await axios.get(`${SERVER}/weather?cityName=${this.state.searchQuery}`)
      console.log(results)
      this.setState({
        weatherData: results.data,
        renderWeather: true,
      })
    } catch(error) {
      this.setState ({
        weatherError: true,
        weatherErrorMessage: `A Weather Error Occured: ${error.response.status}, ${error.response.data}`
      })
    }
  }


  handleQuery = (e) => {
    this.setState({ searchQuery: e })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.requestData(e.target.value);
  }

  render() {

    let dailyForecasts = this.state.weatherData.map((forecast, index) => (
      <ListGroup.Item key={index}>{forecast.date}: {forecast.description}</ListGroup.Item>
    ))

    return (
      <>
      <main className="m-3">
        <Form className="m-3 w-25" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="cityInput">
              Enter City name
            </Form.Label>
            <button type="submit" className="mt-3">Find Me!</button>
            <Form.Control
              id="cityInput"
              placeholder="Someplace"
              onInput={(e) => { this.handleQuery(e.target.value) }}
            />

          </Form.Group>
        </Form>

        <Map locationData={this.state.locationData} />


      {
        this.state.renderWeather &&
        <ListGroup className="m-md-auto w50">
          <ListGroup.Item variant="info">
          {dailyForecasts}
          </ListGroup.Item>
        </ListGroup>
      }
      <h3>{this.state.weatherErrorMessage}</h3>
      </main>
      </>
    );
  }
};

export default Main;