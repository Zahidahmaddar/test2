import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postsReducer } from "./postsReducer";

const rootReducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default rootReducers;
