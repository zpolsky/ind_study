import React, { Component } from 'react';
import { Button, Row, Col, Modal, FormGroup, FormControl, ControlLabel, ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SectionSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: this.props.section,
      showModal: false,
      messageText: '',
      selectedTA: null
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

  handleShow(TA) {
    this.setState({
      showModal: true,
      selectedTA: TA
    });
  }

  handleSend(type) {
    if (type === 'email') {
      console.log(`Email to ${this.state.selectedTA}: ${this.state.messageText}`)
    }
    else if (type === 'text') {
      console.log(`Text to ${this.state.selectedTA}: ${this.state.messageText}`)
    }
    this.setState({
      showModal: false,
      messageText: '',
      selectedTA: null
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

    const { sectionName, time, TAs, missingTAs } = this.state.section;
    const presentTAs = TAs.length - missingTAs.length;
    const percent = Math.round(presentTAs/TAs.length * 100);

    const missingList = missingTAs.map(TA => {
      return (
        <Row key={TA} className="missing-TA">
          <Col xs={5} md={2} mdOffset={5}>
            {TA}
          </Col>
          <Col xs={5} md={3}>
            <Button
              className="missing-TA-btn"
              bsStyle="primary"
              onClick={() => this.handleShow(TA)}>
              Message
            </Button>
          </Col>
        </Row>
      );
    });

    const missingMessage = <span>Missing TAs:<br/></span>;

    return (
      <React.Fragment>
        <Row>
          <Col xs={6} md={2} mdOffset={5}>
            {sectionName} ({presentTAs}/{TAs.length})
            <br />
            <ProgressBar now={percent} label={`${percent}%`}/>
            <br />
            {(missingTAs.length > 0) ? missingMessage : null}
          </Col>
        </Row>
        {missingList}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send Message to {this.state.selectedTA}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="messageText"
                validationState={this.getValidationState()}>
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
      </React.Fragment>
    );
  }
}

export default SectionSummary;
