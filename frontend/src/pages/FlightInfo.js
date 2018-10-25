import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

import Results from '../components/Results';
import Upload from '../components/Upload';
import './flightinfo.css';

const url = 'http://localhost:8001/updateImages';

class FlightInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { showDropzone: false, results:[], loading: true}
    this.showDrop = this.showDrop.bind(this)
    this.hideDrop = this.hideDrop.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:8001/updateImages')
    .then((response) => {
      this.setState({results: response.data, loading: false})
    })
    .catch( (error) => {
      console.log(error);
    });
    //fetch result
  }
  showDrop() {
    this.setState({showDropzone: true})
    console.log(this.state.showDropzone)
  }
  hideDrop() {
    this.setState({showDropzone: false})
  }

  renderDropZone() {
    if (this.state.showDropzone) {
      return (
        <div>
          <Upload params={this.props.match}/>
          <Button bsSize='large' onClick={this.hideDrop}> Cancel </Button>
        </div>
      )
    }


  }
  render() {
    console.log(this.props)
    return (
      <div className='info'>
        <p>Flight Info</p>
        {this.state.loading ? <p>Loading </p> : <Results data={this.state.results} />}
        <Button bsSize='large' onClick={this.showDrop}>Upload Photos</Button>
        {this.renderDropZone()}
      </div>
    )
  }
}

export default FlightInfo
