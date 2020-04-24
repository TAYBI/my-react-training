import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusAction";

export function loadAuthors() {
  return function (dispacth) {
    dispacth(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) =>
        dispacth({ type: types.LOAD_AUTHORS_SUCCESS, authors })
      );
  };
}

// optimistic
