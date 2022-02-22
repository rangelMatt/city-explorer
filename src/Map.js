import React from "react";

class Map extends React.Component {

  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    let locationImg = '${locationLat}, ${locationLong}'
    return (
      <>
        <ul>
          <li>{locationName}</li>
          <li>{locationLat}</li>
          <li>{locationLong}</li>
        </ul>
          <img useMap="#primary" src={locationImg} alt="100%"/>
          <map name ="primary">
        </map>
      </>
    )
  }
}

export default Map;
