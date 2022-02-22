import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

import Map from "./Map"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
    };
  }

  requestData = async (searchTerms) => {
    try {
    let locationIqData = await axios.get('https://us1.locationiq.com/v1/search.php?key=pk.2823f2cb80c2a3d979df18eb23cff40c&q=Arroyo%20Grande&format=json')
    console.log(searchTerms)
    console.log(locationIqData.data)
    this.setState({
      locationData: locationIqData.data[0],
    })
  } catch (error) {
    console.log('Wrongo, thats incorrect')
  }
}
  handleSubmit = (e) => {
    e.preventDefault()
    this.requestData(e.target[0].value);
  }

  render() {
  
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
            />

          </Form.Group>
        </Form>

        <Map locationData={this.state.locationData} />
      </main>
    );
  }
};

export default Main;