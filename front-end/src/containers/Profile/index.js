import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
    };
  }

  render() {
    const { username } = this.state;
    return (
      <h1>Welcome {username}!</h1>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Profile;
