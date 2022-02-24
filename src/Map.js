import React from "react";


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
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${locationLat},${locationLong}&zoom=12`;
    
    return (
      <>
      
        <ul>
          <li>{locationName}</li>
          <li>{locationLat}</li>
          <li>{locationLong}</li>
        </ul>
          <img useMap='#primary' src={url} alt=''/>
          <map name ='primary'>
        </map>
      </>
    )
  }
}

export default Map;
