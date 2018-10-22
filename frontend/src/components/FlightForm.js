import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, PageHeader, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './flightform.css';
class FlightForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      flight: ''
    }
  }

  handleChange(e) {
    this.setState({flight: e.target.value})
  }
  render() {
    return (
      <div className="flight-par">
        <PageHeader>Find Food Wastage By Plane</PageHeader>
        <div className="flight-form">
        <FormGroup controlId="1">
          <ControlLabel>Flight Number</ControlLabel>
          <FormControl type='text' placeholder='SQXXXXX' onChange={this.handleChange}/>
        </FormGroup>
        <Link to={`flight/${this.state.flight}`}><Button bsSize='large'>Flight Form</Button></Link>
        </div>
      </div>
    )
  }
}

export default FlightForm
