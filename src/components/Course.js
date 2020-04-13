import React, { useState } from "react";
import CourseForm from "./CouseForm";
import * as courseApi from "../api/courseApi";
export const Course = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  };

  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1>Course</h1>
      </div>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};
