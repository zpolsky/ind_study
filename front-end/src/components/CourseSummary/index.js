import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

// class CourseSummary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       course: this.props.course,
//       showModal: false,
//       messageText: ""
//     };
//
//     this.handleClose = this.handleClose.bind(this);
//     this.handleShow = this.handleShow.bind(this);
//     this.handleSend = this.handleSend.bind(this);
//     this.handleMessageInput = this.handleMessageInput.bind(this);
//   }
//
//   handleClose() {
//     this.setState({ showModal: false });
//   }
//
//   handleShow() {
//     this.setState({ showModal: true });
//   }
// }

const CourseSummary = ({course, handleExpand, isExpanded}) => {
  const { id, type, courseName, allTAs, missingTAs } = course;

  const name = (type != null) ? id + type : id;
  const presentTAs = allTAs.length - missingTAs.length;

  const handleClick = (TA) => {
    alert(TA);
  };

  const nonExpanded =
  <Row>
    <Col xs={6} md={2} mdOffset={4}>
      {`CSE ${name}`}
      <br />
      <a onClick={() => handleExpand(id)}>Details</a>
    </Col>
    <Col xs={6} md={2}>
      {presentTAs}/{allTAs.length}
    </Col>
  </Row>;

  const missingList = missingTAs.map(TA => {
    return (
      <span
        key={TA}>
        {TA}
        <Button
          bsStyle="primary"
          className="message-btn"
          onClick={() => handleClick(TA)}>
          Message
        </Button>
        <br/>
      </span>
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
  </React.Fragment>;

  return (isExpanded) ? expanded : nonExpanded;

}

CourseSummary.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    courseName: PropTypes.string,
    allTAs: PropTypes.array,
    missingTAs: PropTypes.array
  })
};

export default CourseSummary;
