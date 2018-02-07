import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

import CourseSummary from '../../components/CourseSummary';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const fakeCourses = [
      {
        id: 131,
        type: null,
        courseName: 'Introduction to Computer Science',
        allTAs: ['Alice', 'Bob', 'Clark'],
        missingTAs: ['Bob', 'Clark']
      },
      {
        id: 222,
        type: 'S',
        courseName: 'Internet of Things',
        allTAs: ['Alex', 'Becky', 'Cathy'],
        missingTAs: []
      }
    ];
    this.state = {
      username: this.props.username,
      courses: fakeCourses,
      expandedCol: null
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand = (key) => {
    this.setState({
      expandedCol: (this.state.expandedCol === null) ? key : null
    });

  }

  render() {
    const { username, courses } = this.state;
    let rows = courses.map(course => {
      return <CourseSummary
        key={course.id}
        course={course}
        handleExpand={this.handleExpand}
        isExpanded={course.id === this.state.expandedCol}
      />
    });
    return (
      <div>
        <h3>Welcome {username}!</h3>
        <div className="container-fluid">
          <h4>Courses</h4>
          <Grid>
            {rows}
          </Grid>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  courses: PropTypes.array
};

export default Dashboard;
