import React, { useState, useEffect } from "react";
import CourseForm from "./CouseForm";

import { toast } from "react-toastify";

import courseStore from "../stores/courseStore";
import * as courseAction from "../actions/courseAction";

export const Course = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);

    let slug = props.match.params.slug;
    const _course = courseStore.getCoursesBySlug(slug);

    if (courses.length === 0) courseAction.loadCouses();
    else if (slug) {
      if (!_course) props.history.push("/404");
      else setCourse(courseStore.getCoursesBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug, props.history]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

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
    courseAction.saveCourse(course).then(() => {
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
