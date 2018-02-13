import React, { Component } from 'react';
import { Button, Row, Col, Modal, FormGroup, FormControl, ControlLabel, ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';
import MessageModal from '../MessageModal';

class SectionSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: this.props.section
    };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(type, messageText, selectedTA) {
    if (type === 'email') {
      console.log(`Email to ${selectedTA}: ${messageText}`)
    }
    else if (type === 'text') {
      console.log(`Text to ${selectedTA}: ${messageText}`)
    }
  }

  render() {
    const { sectionName, time, TAs, missingTAs } = this.state.section;
    const presentTAs = TAs.length - missingTAs.length;
    const percent = Math.round(presentTAs/TAs.length * 100);

    // ref allows modal functions to be called (parent calls child functions)
    const modal = <MessageModal
      ref={instance => { this.modal = instance; }}
      handleSend={this.handleSend}
    />;

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
              onClick={() => this.modal.handleShow(TA)}>
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
        {modal}
      </React.Fragment>
    );
  }
}

export default SectionSummary;
