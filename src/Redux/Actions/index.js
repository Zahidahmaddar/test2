export const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// export const showPosts = (data) => {
//   return {
//     type: "POSTS",
//     payload: data,
//   };
// };

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS ";

export const getUsersFetch = () => {
  return {
    type: GET_USERS_FETCH,
  };
};
