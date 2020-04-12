import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesListe from "./CoursesListe";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1 className="text-center">Courses Page</h1>
      </div>
      <CoursesListe courses={courses} />
    </>
  );
}
