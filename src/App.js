import "./App.css";
import Home from "./Home";
import LoginForm from "./LoginForm/LoginForm";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./Redux/Actions/index";

function App() {
  // const [login, setLogin] = useState(false);
  const user = useSelector((state) => state.user);

  // const dispatch = useDispatch();

  useEffect(() => {
    // loginUser(localStorage.getItem("user") ? true : false);
    // dispatch(loginUser());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login-form"
          element={user ? <Navigate to="/home" /> : <LoginForm />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login-form" />}
        />

        <Route path="*" element={<Navigate to="/login-form" />} />
      </Routes>
    </div>
  );
}

export default App;
