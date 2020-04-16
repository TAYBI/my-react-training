import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import authorActionTypes from "../actions/authorActionTypes";

const CHANGE_EVENT = "change";

let _authors = [];

class AuthoreStore extends EventEmitter {
  addChangeListener(callback) {
    this.addListener(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }
}

const store = new AuthoreStore();

Dispatcher.register((action) => {
  switch (action.type) {
    case authorActionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      debugger;
      store.emitChange();
      break;

    default:
      break;
  }
});

export default store;
