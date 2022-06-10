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

export const showPosts = (data) => {
  return {
    type: "POSTS",
    payload: data,
  };
};
