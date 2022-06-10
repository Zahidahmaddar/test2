export const postsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "POSTS":
      return payload;
    default:
      return state;
  }
};
