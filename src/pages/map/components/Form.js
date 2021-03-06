
import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <section className='section'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.props.insertPin(this.state.name, this.state.lat, this.state.lng)
          }}
        >
          <div className='field '>
            <p className='field control is-expanded'>
              <input className='input' type='text' value={this.state === null ? '' : this.state.name} onChange={event => this.setState({ name: event.target.value })} placeholder='Name' />
            </p>
            <div class="field is-horizontal">
              <p className='control is-expanded'>
                <input className='input' type='number' value={this.state === null ? '' : this.state.lat} onChange={event => this.setState({ lat: event.target.value })} placeholder='Latitude' />
              </p>
              <p className='control is-expanded'>
                <input className='input' type='number' value={this.state === null ? '' : this.state.lng} onChange={event => this.setState({ lng: event.target.value })} placeholder='Longitude' />
              </p>
            </div>
            <p className='field control'>
              <button className='button is-info' type='submit'>
                Add
              </button>
            </p>
          </div>
        </form>
      </section>
    )
  }
}

export default Form
