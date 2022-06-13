import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postsReducer } from "./postsReducer";
import myFirstReducer from "./myFirstReducer";

const rootReducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
  myFirstReducer: myFirstReducer,
});

export default rootReducers;
