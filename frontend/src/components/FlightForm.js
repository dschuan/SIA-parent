import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
      <div>
        <FormGroup controlId={1}>
          <ControlLabel>Key in the Flight Number</ControlLabel>
          <FormControl type='text' placeholder='SQXXXXX' onChange={this.handleChange}/>
        </FormGroup>
        <Link to={`flight/${this.state.flight}`}><Button bsSize='large'>Flight Form</Button></Link>
      </div>
    )
  }
}

export default FlightForm
