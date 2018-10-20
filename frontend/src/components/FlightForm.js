import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class FlightForm extends Component {
  render() {
    return (
      <div>
        <p>Flight Info </p>
        <Button bsSize='large'>Flight Form</Button>
      </div>
    )
  }
}

export default FlightForm
