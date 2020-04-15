import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function courseAction(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CRAETE_COURSE,
      course: savedCourse,
    });
  });
}
