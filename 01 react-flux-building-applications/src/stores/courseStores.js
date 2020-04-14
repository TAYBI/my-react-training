import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.addListener(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CRAETE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    default:
      break;
  }
});

export default store;
