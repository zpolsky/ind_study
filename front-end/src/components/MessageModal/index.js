import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      messageText: '',
      selectedTA: null
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleClose() {
    this.setState({
      showModal: false,
      messageText: '',
      selectedTA: null
    });
  }

  handleShow(TA) {
    this.setState({
      showModal: true,
      selectedTA: TA
    });
  }

  handleMessageInput(e) {
    this.setState({ messageText: e.target.value });
  }

  handleSend(type) {
    const { messageText, selectedTA } = this.state;
    this.props.handleSend(type, messageText, selectedTA);
    this.handleClose();
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {this.state.selectedTA}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="messageText">
              <ControlLabel>Message to {this.state.selectedTA}:</ControlLabel>
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
          <Button bsStyle="primary" onClick={() => this.handleSend('email')}>Send Email</Button>
          <Button bsStyle="primary" onClick={() => this.handleSend('text')}>Send Text</Button>
          <Button onClick={this.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

MessageModal.propTypes = {
  handleSend: PropTypes.func
};

export default MessageModal;
