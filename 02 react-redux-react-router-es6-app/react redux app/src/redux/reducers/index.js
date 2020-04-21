import { combineReducers } from "redux";
import courses from "./configureStore";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
