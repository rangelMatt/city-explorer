import React from "react";
import { Form, ListGroup, Card } from "react-bootstrap";
import axios from "axios";
import Weather from "./Weather";
import Movies from "./Movies";

import Map from "./Map"
// import Weather from "./Weather";

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
      movieData: undefined,
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

    let lat = this.state.locationData.lat;
    let lon = this.state.locationData.lon;
    let url = `${SERVER}/weather?lat=${lat}&lon=${lon}&days=3`;

    try {
      let results = await axios.get(url)

      this.setState({
        weatherData: results.data,
        renderWeather: true,
      })
    } catch (error) {
      this.setState({
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
    console.log('main state', this.state);
    let dailyForecasts = this.state.weatherData.map((forecast, index) => {
      <ListGroup.Item key={index}>{forecast.date}: {forecast.description}</ListGroup.Item>
    })

    return (
      <>
        <main className="m-3">
          <Form className="m-3 w-25" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="cityInput">
                Enter City Name
              </Form.Label>
              <button type="submit"
                className="mt-3">Find Me!
              </button>
              <Form.Control
                id="cityInput"
                placeholder="Someplace"
                onInput={(e) => { this.handleQuery(e.target.value) }}
              />

            </Form.Group>
          </Form>

          <Map locationData={this.state.locationData} />

          {
            this.statedisplayCityData &&
            <Card>
              <Card.Body>
                <Card.Title>{this.state.cityData.display_Name}</Card.Title>
                <Card.Text>
                  {this.url}
                </Card.Text>
              </Card.Body>
            </Card>
          }
          {
            this.state.renderWeather &&
            <ListGroup className="m-md-auto w50">
              {dailyForecasts}
              {this.state.searchQuery}
              {
                this.state.weatherData &&
                <Weather weatherData={this.state.weatherData} />
              }
            </ListGroup>
          }
          <h3>{this.state.weatherErrorMessage}</h3>
        </main>
      </>
    );
  }
};

export default Main;