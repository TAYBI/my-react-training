import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export function loadAuthors() {
  return function (dispacth) {
    dispacth(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) =>
        dispacth({ type: types.LOAD_AUTHORS_SUCCESS, authors })
      )
      .catch((error) => {
        dispacth(apiCallError(error));
        throw error;
      });
  };
}

// optimistic
