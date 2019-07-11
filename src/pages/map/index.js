
import React, { Component } from 'react'
import './style.css'
import GoogleMap from './components/GoogleMap'
import Form from './components/Form'

class Map extends Component {
  render () {
    return (
      <section id='map' >
        <Form />
        <GoogleMap />
      </section>
    )
  }
}

export default Map
