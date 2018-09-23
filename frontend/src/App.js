import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Main from './pages/Main';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Placeholder Label</h1>
        </header>
        <div className="Main">
          <Sidebar />
          <div className="Routes">
            <Switch>
              <Route exact path = "/" component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
