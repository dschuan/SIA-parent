import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import Main from './pages/Main';
import FlightMain from './pages/FlightMain';
import NoMatch from './pages/NoMatch';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="Main">
          <div className="Routes">
            <Switch>
              <Route exact path = "/" component={Main} />
              <Route path = "/flight" component={FlightMain}/>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
