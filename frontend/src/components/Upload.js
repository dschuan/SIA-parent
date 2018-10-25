import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import ReactDropzone from 'react-dropzone';
import { Redirect } from 'react-router-dom';

import Results from '../components/Results';

import './upload.css'
class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loadMessage: '',
      showStatus: false,
      refresh: false,
      error: '',
      files: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    this.setState({loading: true, loadMessage:'Upload Beginning', showStatus: true, files:files})

    let form = new FormData()
    console.log('dropping ' + files.length + 'files')

    for (let i = 0; i < files.length; i++) {
      form.append(files[i].name, files[i])
    };
    const url = `http://localhost:5000/post-image/${this.props.match.params.id}`
    this.setState({loadMessage:'Sending images over...'})
    fetch(url, {
      method: 'POST',
      body: form
    }).then(res => {
      return res.json();
    }).then(res => {
      this.setState({loadMessage:'Success', loading: false})
      console.log(res)
      setTimeout(() => {
        this.setState({refresh:true})
      }, 500)
    })

  }


  clickHandler(e) {
    this.setState({refresh: true})
  }
  renderDropzone() {
    return(
      <ReactDropzone onDrop={this.onDrop} className='dropzone' activeClassName='dropzone-active'>
        <h3>Drop your images here</h3>
      </ReactDropzone>

    )
  }
  renderResults() {
    return(
      <div>
        <Results data={this.state.results} files={this.state.files}/>
        <Button onClick={this.clickHandler}>Refresh</Button>
      </div>
    )
  }
  renderStatus() {
    return (
      <div>
        <h4> Status</h4>
        <p>{this.state.loadMessage}</p>
      </div>
    )
  }

  render() {
    return (
      <div className='upload'>
        {this.state.showStatus ? this.renderStatus() : (<div></div>)}
        {this.renderDropzone()}
        {this.state.refresh ? <Redirect to={this.props.match.url} />} : <div />
      </div>
    )
  }
}

export default Upload;
