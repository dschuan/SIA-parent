import React, {Component} from 'react';
import ReactDropzone from 'react-dropzone';

import './upload.css'
class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loadMessage: '',
      error: ''
    }
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    this.setState({loading: true, loadMessage:'Upload Beginning'})

    let form = new FormData()
    console.log('dropping ' + files.length + 'files')

    for (let i = 0; i < files.length; i++) {
      form.append(files[i].name, files[i])
    };
    const url = `http://localhost:5000/post-image/${this.props.params.id}`
    console.log(url)
    this.setState({loadMessage:'Sending images over...'})
    fetch(url, {
      method: 'POST',
      body: form,
      mode: 'no-cors'
    }).then(res => {
      console.log(res.status);
      this.setState({loading: false, loadMessage: 'Success!'})
      return res.blob();
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className='upload'>
        <ReactDropzone onDrop={this.onDrop} className='dropzone' activeClassName='dropzone-active'>
          <h3>Drop your images here</h3>
        </ReactDropzone>
        <div>
          <h4> Images Uploaded: </h4>
          <p>{this.state.loadMessage}</p>
        </div>
      </div>
    )
  }
}

export default Upload;
