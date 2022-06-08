import React from "react";
import { Route, Navigate } from "react-router-dom";

function AuthRoute({ path, element }) {
  return (
    <Route path={path} element={true ? element : <Navigate to="/login" />} />
  );
}

export default AuthRoute;
