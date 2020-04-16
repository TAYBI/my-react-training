import * as authorApi from "../api/authorApi";
import dispatcher from "../appDispatcher";
import authorActionTypes from "./authorActionTypes";

export function loadAuthors() {
  return authorApi.getAuthors((authors) => {
    dispatcher.dispatch({
      type: authorActionTypes.LOAD_AUTHORS,
      authors,
    });
  });
}
