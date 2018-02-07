import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      messageText: ''
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({
      showModal: true
    });
  }

  handleSend(type) {
    console.log(`${type} to ${this.props.selectedTA}: ${this.state.messageText}`);
    this.setState({
      showModal: false,
      messageText: '',
    });
  }

  handleMessageInput(e) {
    this.setState({ messageText: e.target.value });
  }

  getValidationState() {
    const length = this.state.messageText.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {this.props.selectedTA}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup
              controlId="messageText"
              validationState={this.getValidationState()}>
              <ControlLabel>Message to {this.props.selectedTA}:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.messageText}
                placeholder="Enter message"
                onChange={this.handleMessageInput}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={() => this.handleSend('Email')}>Send Email</Button>
          <Button bsStyle="primary" onClick={() => this.handleSend('Text')}>Send Text</Button>
          <Button onClick={this.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

MessageModal.PropTypes = {
  selectedTA: PropTypes.string
};

export default MessageModal;
