import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import react, { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={{ position: "relative", width: "70%", height: "40%" }}
        google={this.props.google}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCnia8u8V1tUWGtBfGd9NljhG_-Knl-3AU",
})(MapContainer);
