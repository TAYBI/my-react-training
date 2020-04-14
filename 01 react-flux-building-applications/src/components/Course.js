import React, { useState, useEffect } from "react";
import CourseForm from "./CouseForm";

import * as courseApi from "../api/courseApi";

import { toast } from "react-toastify";

export const Course = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    let slug = props.match.params.slug;

    if (slug)
      courseApi.getCourseBySlug(slug).then((_course) => {
        setCourse(_course);
      });
  }, [props.match.params.slug]);

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const formIsValide = () => {
    const _error = {};

    if (!course.title) _error.title = "Title is required";
    if (!course.authorId) _error.authorId = "Author is required";
    if (!course.category) _error.category = "Category is required";

    setErrors(_error);

    return Object.keys(_error).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValide()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved!");
    });
  };
  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1>Course</h1>
      </div>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};