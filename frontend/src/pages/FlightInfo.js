import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import ReactDropzone from 'react-dropzone'
import request from 'superagent'

class FlightInfo extends Component {
  constructor(props) {
    super(props)
    this.state =
    { showDropzone: false,
      totalNumber: '',
      uploaded: false
    }
    this.showDrop = this.showDrop.bind(this)
    this.hideDrop = this.hideDrop.bind(this)

  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes

    let form = new FormData()
    console.log('dropping ' + files.length + 'files')

    for (let i = 0; i < files.length; i++) {
      form.append(files[i].name, files[i])
    };
    const url = `http://localhost:5000/post-image/${this.props.match.params.id}`
    console.log(url)
    fetch(url, {
      method: 'POST',
      body: form,
      mode: 'no-cors'
    }).then(res => {
      console.log(res.status);
      return res.blob();
    })
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
          <ReactDropzone onDrop={this.onDrop}>
            Drop your images here
          </ReactDropzone>
          <div>
            <h4> Images Uploaded: </h4>

          </div>
          <Button bsSize='large' onClick={this.hideDrop}> Cancel </Button>
        </div>
      )
    }


  }
  render() {
    return (
      <div>
        <p>Info here </p>
        <Button bsSize='large' onClick={this.showDrop}>Upload Photos</Button>
        {this.renderDropZone()}
      </div>
    )
  }
}

export default FlightInfo
