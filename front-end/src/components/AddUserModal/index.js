import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userData: {
        username: '',
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        phone: ''
      }
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({
      showModal: false,
      userData: {
        username: '',
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        phone: ''
      }
    });
  }

  handleShow() {
    this.setState({
      showModal: true,
    });
  }

  // Adapted from https://reactjs.org/docs/forms.html
  handleInput(type, e) {
    const userData = Object.assign({}, this.state.userData);
    userData[type] = e.target.value;
    this.setState({userData});
    // const { value, name } = event.target;
    // this.setState({
    //   [name]: value
    // });
  }

  handleSubmit() {
    // const { userData } = this.state;
    this.props.handleSubmit(this.state.userData);
    this.handleClose();
  }

  render() {
    const FieldGroup = ({id, label, ...props}) => {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    }

    return (
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FieldGroup
              id="formControlsUsername"
              type="text"
              label="Username"
              placeholder="Enter WUSTL key"
              onChange={e => this.handleInput('username', e)}
            />
            <FieldGroup
              id="formControlsFirstName"
              type="text"
              label="First Name"
              placeholder="Enter first name"
              onChange={e => this.handleInput('firstName', e)}
            />
            <FieldGroup
              id="formControlsLastName"
              type="text"
              label="Last Name"
              placeholder="Enter last name"
              onChange={e => this.handleInput('lastName', e)}
            />
            <FormGroup>
              <Radio name="radioRole" inline>TA</Radio>{' '}
              <Radio name="radioRole" inline>Admin</Radio>{' '}
              <Radio name="radioRole" inline>Full</Radio>
            </FormGroup>
            <FieldGroup
              id="formControlsEmail"
              type="text"
              label="Email"
              placeholder="Enter email"
              onChange={e => this.handleInput('email', e)}
            />
            <FieldGroup
              id="formControlsPhone"
              type="text"
              label="Phone"
              placeholder="Enter phone number"
              onChange={e => this.handleInput('phone', e)}
            />
            {/* <FormGroup controlId="userData">
              <ControlLabel>Message to {this.state.selectedTA}:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.messageText}
                placeholder="Enter message"
                onChange={this.handleMessageInput}
              />
            </FormGroup> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
          <Button onClick={this.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddUserModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddUserModal;
