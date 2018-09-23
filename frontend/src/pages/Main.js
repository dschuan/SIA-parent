import React, { Component } from 'react';

import MainStats from '../components/MainStats';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res:''
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/get-param1/1', {
      method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
    })
    .then((response) => {
      return response.json();
    }).then ((res) => {
        this.setState({res})
    })
  }
  render(){
    console.log(this.state.res);
    const {empty, full, half} = this.state.res
    return(
      <div>
        <h2>Hi</h2>
        <p> Dashboard here </p>
        <MainStats empty={empty} full={full} half={half}/>
      </div>
    )
  }
}

export default Main
