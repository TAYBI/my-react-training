import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course };
// }

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses };
// }

export function loadCourses() {
  return function (dispacth) {
    dispacth(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) =>
        dispacth({ type: types.LOAD_COURSES_SUCCESS, courses })
      )
      .catch((error) => {
        dispacth(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  // eslint-disable-next-line no-unused-vars
  return function (dispacth, getState) {
    dispacth(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispacth({ type: types.UPDATE_COURSE_SUCCESS, course: savedCourse })
          : dispacth({
              type: types.CREATE_COURSE_SUCCESS,
              course: savedCourse,
            });
      })
      .catch((error) => {
        dispacth(apiCallError(error));
        throw error;
      });
  };
}
