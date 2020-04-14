import React, { useState, useEffect } from "react";
import CoursesListe from "./CoursesListe";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStores";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseStore.getCourses());
  }, []);

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
      <CoursesListe courses={courses} />
    </>
  );
}
