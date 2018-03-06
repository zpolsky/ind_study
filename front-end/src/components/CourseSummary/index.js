import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

import SectionSummary from '../SectionSummary';

class CourseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
      isExpanded: false
    };
  }

  render() {
    const { id, sections, allTAs, missingTAs } = this.state.course;

    const presentTAs = allTAs.length - missingTAs.length;
    const arrow = (this.state.isExpanded) ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-right";

    const sectionList = sections.map(section => {
      return <SectionSummary key={section.sectionName} section={section}/>
    });

    return (
      <Row>
        <Col xs={6} md={4} mdOffset={4}>
          <div>
            <p>
              <span>CSE {id}</span>
              <span className="attendance-fraction">{presentTAs}/{allTAs.length}</span>
            </p>
            <a onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
              <span className={arrow}/> Details
            </a>
            {this.state.isExpanded && sectionList}
          </div>
        </Col>
      </Row>
    );
  }
}

CourseSummary.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    courseName: PropTypes.string,
    sections: PropTypes.array,
    allTAs: PropTypes.array,
    missingTAs: PropTypes.array
  }),
};

export default CourseSummary;
