export const userReducer = (state = {}, { type }) => {
  switch (type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};
