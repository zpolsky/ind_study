import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

import getCourses from '../../api/getCourses';
import CourseSummary from '../../components/CourseSummary';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      courses: [],
      isFetching: true
    };
  }

  componentWillMount() {
    getCourses(this.props.username)
    .then((data) => {
      this.setState({
        courses: data,
        isFetching: false
      });
    });
  }

  render() {
    const { username, courses, isFetching } = this.state;
    if (isFetching) {
      return <h1>Fetching...</h1>
    }
    let rows = courses.map(course => {
      return <CourseSummary
        key={course.id}
        course={course}
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
