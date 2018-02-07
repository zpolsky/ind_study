import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import Login from '../../containers/Login';
import Dashboard from '../../containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
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
