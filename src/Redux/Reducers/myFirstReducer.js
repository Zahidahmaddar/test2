import { GET_USERS_SUCCESS } from "../Actions/index";

const myFirstReducer = (state = { users: [] }, action) => {
  console.log(action.payload, "payload");
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default myFirstReducer;
