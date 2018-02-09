import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import './App.css';
import logo from '../../assets/washu-logo.png';

import Login from '../../containers/Login';
import Dashboard from '../../containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo"/>
        </header>
        <Router>
          <div>
            <Route exact path='/' component={Login}/>
            <Route path='/dashboard' render={(props) => (
              <Dashboard {...props} username="Zach" />
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
