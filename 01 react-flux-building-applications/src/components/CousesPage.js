import React, { useState, useEffect } from "react";
import CoursesListe from "./CoursesListe";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import authoreStore from "../stores/authoreStore";
import { loadCouses, deleteCourse } from "../actions/courseAction";
import { loadAuthors } from "../actions/authorAction";
import { toast } from "react-toastify";
// import * as authorApi from "../api/authorApi";

export default function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authoreStore.getAuthors());

  // let __authors = [];

  useEffect(() => {
    // if (!authors)
    //   authorApi.getAuthors().then((_authors) => _setAuthors(_authors));

    authoreStore.addChangeListener(onChange);
    courseStore.addChangeListener(onChange);

    if (authoreStore.getAuthors().length === 0) loadAuthors();
    if (courseStore.getCourses().length === 0) loadCouses();

    return () => {
      authoreStore.removeChangeListener(onChange);
      courseStore.removeChangeListener(onChange);
    };
  }, []);

  const onChange = () => {
    setAuthors(authoreStore.getAuthors());
    setCourses(courseStore.getCourses());
  };

  // const _setAuthors = (_authors) => {
  //   setAuthors(_authors);
  // };

  const handleDelete = (id) => {
    deleteCourse(id);
    toast.error("courde deleted !");
  };

  const authorIdtToAuthorName = (id) => {
    const author = authors.find((author) => author.id === id).name;
    return author;
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
      <CoursesListe
        courses={courses}
        handleAutgorName={authorIdtToAuthorName}
        onDelete={handleDelete}
      />
    </>
  );
}
