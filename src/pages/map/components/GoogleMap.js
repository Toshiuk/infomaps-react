
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Pin } from './Pin'

class GoogleMap extends Component {

  render() {
    return (
      <div className="container">
        <div style={{ height: '100vh', margin: '0 auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBzM9QFihDcfMVMgJUohyQmFzM8UkUxm00' }}
            defaultCenter={{ lat: -30.03, lng: -51.21 }}
            defaultZoom={11}
          >

            {this.props.pins.map((pin, index) => (
              <Pin
                key={`pin_${index}`}
                lat={pin.lat}
                lng={pin.lng}
                text={pin.name}
              />

            ))}

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap
