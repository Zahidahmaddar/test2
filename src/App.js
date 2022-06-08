import "./App.css";
import Home from "./Home";
import LoginForm from "./LoginForm/LoginForm";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(localStorage.getItem("user") ? true : false);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login-form"
          element={
            login ? <Navigate to="/home" /> : <LoginForm setLogin={setLogin} />
          }
        />
        <Route
          path="/home"
          element={
            login ? <Home setLogin={setLogin} /> : <Navigate to="/login-form" />
          }
        />

        <Route path="*" element={<Navigate to="/login-form" />} />
      </Routes>
    </div>
  );
}

export default App;
