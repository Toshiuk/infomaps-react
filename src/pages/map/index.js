
import React, { Component } from 'react'
import './style.css'
import GoogleMap from './components/GoogleMap'
import Form from './components/Form'

class Map extends Component {
  state = {
    pins: [],
  };

  insertPin = (name, lat, lng) => {
    this.setState({ pins: [...this.state.pins, { lat, lng, name }] })
  }

  render() {
    return (
      <section id='map' >
        <Form insertPin={this.insertPin} />
        <GoogleMap pins={this.state.pins} />
      </section>
    )
  }
}

export default Map
