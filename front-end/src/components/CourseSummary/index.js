import React, { Component } from 'react';
import { Button, Row, Col, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

// import MessageModal from '../MessageModal';

class CourseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
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
    console.log(`${type} to ${this.state.selectedTA}: ${this.state.messageText}`);
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
    const { id, type, courseName, allTAs, missingTAs } = this.state.course;

    const name = (type != null) ? id + type : id;
    const presentTAs = allTAs.length - missingTAs.length;

    const arrow = (this.props.isExpanded) ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-right";

    const nonExpanded =
    <Row>
      <Col xs={6} md={2} mdOffset={4}>
        {`CSE ${name}`}
        <br />
        <a onClick={() => this.props.handleExpand(id)}>
          Details 
          <span className={arrow}/>
        </a>

      </Col>
      <Col xs={6} md={2}>
        {presentTAs}/{allTAs.length}
      </Col>
    </Row>;

    const missingList = missingTAs.map(TA => {
      return (
        <React.Fragment>
          <span
            className="missing-TA"
            key={TA}>
            {TA}
          </span>
          <Button
            bsStyle="primary"
            onClick={() => this.handleShow(TA)}>
            Message
          </Button>
          <br/>
        </React.Fragment>
      );
    });

    const expanded =
    <React.Fragment>
      {nonExpanded}
      <Row>
        <Col xs={6} md={8} mdOffset={2}>
          <span>Missing TAs: </span>
          <br/>
          {missingList}
        </Col>
      </Row>
      {/* <MessageModal
        selectedTA={this.state.selectedTA}
        showModal={this.state.showModal}
      /> */}
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
          <Button bsStyle="primary" onClick={() => this.handleSend('Email')}>Send Email</Button>
          <Button bsStyle="primary" onClick={() => this.handleSend('Text')}>Send Text</Button>
          <Button onClick={this.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>;

    return (this.props.isExpanded) ? expanded : nonExpanded;
  }
}

CourseSummary.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    courseName: PropTypes.string,
    allTAs: PropTypes.array,
    missingTAs: PropTypes.array
  }),
  handleExpand: PropTypes.function,
  isExpanded: PropTypes.boolean
};

export default CourseSummary;
