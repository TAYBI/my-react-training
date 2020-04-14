import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoursesListe = ({ courses }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link className="text-light" to={`/course/${course.slug}`}>
                  {course.title}
                </Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CoursesListe.prototype = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CoursesListe;
