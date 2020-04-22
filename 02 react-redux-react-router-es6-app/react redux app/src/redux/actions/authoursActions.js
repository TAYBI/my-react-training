import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthors() {
  return function (dispacth) {
    return authorApi
      .getAuthors()
      .then((authors) =>
        dispacth({ type: types.LOAD_AUTHORS_SUCCESS, authors })
      );
  };
}
