import React, { useState, useEffect } from "react";
import CoursesListe from "./CoursesListe";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCouses, deleteCourse } from "../actions/courseAction";
import { toast } from "react-toastify";

export default function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCouses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const handleDelete = (id) => {
    deleteCourse(id);
    toast.error("courde deleted !");
  };

  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1 className="text-center">Courses Page</h1>
        <br />
        <div className="text-center">
          <Link to="/course" className="btn btn-primary my-auto">
            add course
          </Link>
        </div>
      </div>
      <CoursesListe courses={courses} onDelete={handleDelete} />
    </>
  );
}
