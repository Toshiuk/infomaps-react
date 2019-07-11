
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Pin } from './Pin'

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: -30.03,
      lng: -51.21
    },
    zoom: 11
  };

  render() {
    return (
      <div className="container">
        <div style={{ height: '100vh', margin: '0 auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBzM9QFihDcfMVMgJUohyQmFzM8UkUxm00' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Pin
              lat={-30.03}
              lng={-51.21}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap
