import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course };
// }

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses };
// }

export function loadCourses() {
  return function (dispacth) {
    return courseApi
      .getCourses()
      .then((courses) =>
        dispacth({ type: types.LOAD_COURSES_SUCCESS, courses })
      );
  };
}

export function saveCourse(course) {
  // eslint-disable-next-line no-unused-vars
  return function (dispacth, getState) {
    return courseApi.saveCourse(course).then((savedCourse) => {
      course.id
        ? dispacth({ type: types.UPDATE_COURSE_SUCCESS, course: savedCourse })
        : dispacth({ type: types.CREATE_COURSE_SUCCESS, course: savedCourse });
    });
  };
}
