
import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (

      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Latitude" />
        </p>
        <p className="control is-expanded">
          <input className="input" type="email" placeholder="Longitude" />
        </p>
        <p class="control">
          <button class="button is-info">
            Add
          </button>
        </p>
      </div>

    );
  }
}

export default Form
