import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course };
// }

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

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
          ? dispacth(updateCourseSuccess(savedCourse))
          : dispacth(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        dispacth(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch({ type: types.DELETE_COURSE_OPTIMISTIC, course });
    return courseApi.deleteCourse(course.id);
  };
}
