import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';

import MainStats from '../components/MainStats';
import StatTrend from '../components/StatTrend';
import FoodTypeStat from '../components/FoodTypeStat';

import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res:''
    };
  }

  render(){
    return(
      <div className="dashboard">
        <div className="row">
          <PageHeader>Overall Food Statistics</PageHeader>
        </div>
        <div className="row">
          <MainStats empty={10} full={15} half={20}/>
          <FoodTypeStat />
        </div>
        <div className="row">
          <StatTrend />
        </div>
      </div>
    )
  }
}

export default Main
