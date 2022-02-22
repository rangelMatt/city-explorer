import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

import Map from "./Map"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      query: ''
    };
  }

  requestData = async (searchTerms) => {
    try {
    let locationIqData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`)
    // question mark is 
    console.log(searchTerms)
    console.log(locationIqData.data)   
    this.setState({
      locationData: locationIqData.data[0],
    })
  } catch (error) {
    console.log('Wrongo, thats incorrect',error.message)
    this.state({
      error: true,
      errorMessage: `Error has happened: ${error.response.status}, ${error.response.data.error}`
    })
  }
}
  handleQuery = (e) => {
    this.setState({query: e})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.requestData(e.target.value);
  }

  render() {
    console.log(this.state)
    return (
      <main className="m-3">
        <Form className="m-3 w-25" onSubmit ={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="cityInput">
              Enter City name
            </Form.Label>
            <button type="submit" className="mt-3">Find Me!</button>
            <Form.Control
              id="cityInput"
              placeholder="Someplace"
              onInput={(e)=>{this.handleQuery(e.target.value)}} 
            />

          </Form.Group>
        </Form>

        <Map locationData={this.state.locationData} />
      </main>
    );
  }
};

export default Main;