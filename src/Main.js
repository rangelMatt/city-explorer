import React from "react";
import Form from "react-bootstrap/form"

import Map from "./Map"

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let search
  }

  render() {
    return (
      <main>
        <Form className="m-3 w-25">
          <Form.Group>
            <Form.Label htmlFor="cityInput">
              Enter City name
            </Form.Label>
            <button className="mt-3 onClick="{this.handleSubmit}>Find Me!</button>
            <Form.Control
              id="cityInput"
              placeholder="Someplace"
            />

          </Form.Group>
        </Form>

        <Map />
      </main>
    );
  }
};

export default Map;