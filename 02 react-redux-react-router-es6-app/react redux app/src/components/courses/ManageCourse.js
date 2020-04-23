import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authoursActions from "../../redux/actions/authoursActions";
import PropTypes from "prop-types";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm";

function ManageCourse(props) {
  // eslint-disable-next-line react/prop-types
  const { courses, authors, loadCourses, loadAuthors } = props;

  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0)
      loadCourses().catch((err) => console.log("Error Courses " + err));

    if (authors.length === 0)
      loadAuthors().catch((err) => console.log("Error Authors " + err));
  }, []);

  return <CourseForm course={course} errors={errors} />;
}

ManageCourse.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authoursActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
