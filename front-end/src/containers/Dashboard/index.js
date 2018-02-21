import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

import getCourses from '../../api/getCourses';
import CourseSummary from '../../components/CourseSummary';
import { ClipLoader } from 'react-spinners';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    })
    .catch(error => {
      this.setState({
        courses: [],
        isFetching: false
      });
    })
  }

  render() {
    const { courses, isFetching } = this.state;
    const loader =
    <div className="loader">
      <ClipLoader color={'#005f85'} loading={isFetching}/>
    </div>;

    let rows = courses.map(course => {
      return <CourseSummary
        key={course.id}
        course={course}
      />
    });
    const dashboard =
      <div>
        <h3>Welcome {this.props.username}!</h3>
        <div className="container-fluid">
          <h4>Courses</h4>
          <Grid>
            {rows}
          </Grid>
        </div>
      </div>;

    return (isFetching) ? loader : dashboard;
  }
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  courses: PropTypes.array
};

export default Dashboard;
