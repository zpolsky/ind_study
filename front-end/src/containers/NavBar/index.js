import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from '../Login';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import './index.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
    };
  }

  render() {
    const { username } = this.state;

    const navStyle = {
      "text-align": "left"
    };

    const myNav =
    <Navbar inverse collapseOnSelect style={navStyle}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">TA Portal</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/">Login</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/dashboard">Dashboard</Link>
          </NavItem>
          <NavItem eventKey={3} href="#">
            <Link to="/profile">Profile</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;


    return (
      <Router>
        <div>
          {myNav}
          <Route exact path='/' component={Login}/>
          <Route path='/dashboard' render={(props) => (
            <Dashboard {...props} username="Zach" />
          )}/>
          <Route path='/profile' render={(props) => (
            <Profile {...props} username="Zach" />
          )}/>
        </div>
      </Router>
    );
  }
}

export default NavBar;
