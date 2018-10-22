import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import FlightForm from '../components/FlightForm';
import FlightInfo from './FlightInfo';

class FlightMain extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/flight' component={FlightForm}/>
          <Route path='/flight/:id' component={FlightInfo}/>

        </Switch>
      </div>
    )
  }
}

export default FlightMain
