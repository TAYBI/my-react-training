import React, { useState } from "react";
import CourseForm from "./CouseForm";

export const Course = () => {
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

  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1>Course</h1>
      </div>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};
