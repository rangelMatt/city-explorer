import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";


class Map extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        url: false
      }
    }

  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    // let apiKey = heruku
    let locationPic = (locationName === undefined) ?
      `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=,&zoom=1` :
      `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${locationLat},${locationLong}&zoom=10`

    return (
      <>
        {
          locationName &&
          <>
            <ListGroup>
              <ListGroup.Item>Location: {locationName}</ListGroup.Item>
              <ListGroup.Item>Lat: {locationLat}</ListGroup.Item>
              <ListGroup.Item>Long: {locationLong}</ListGroup.Item>
            </ListGroup>
            <div className = "imageText">
              <Image 
                useMap='#primary'
                src={locationPic}
                alt="{this.props.locationData.display_name}"
                className="rounded mx-auto d-block"


              />
            </div>
            <map name='primary'/>
          </>
        }
      </>
    )
  }
}

export default Map;
