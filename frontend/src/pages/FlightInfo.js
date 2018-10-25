import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

import Upload from '../components/Upload';
import './flightinfo.css';

class FlightInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { showDropzone: false, results=[]}
    this.showDrop = this.showDrop.bind(this)
    this.hideDrop = this.hideDrop.bind(this)
  }
  componentDidMount() {
    this.setState({results: getResults()})
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
        <Button bsSize='large' onClick={this.showDrop}>Upload Photos</Button>
        {this.renderDropZone()}
      </div>
    )
  }
}

export default FlightInfo
