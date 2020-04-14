import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesListe from "./CoursesListe";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
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