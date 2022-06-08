import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../LoginForm/LoginForm.css";
import Data from "../credentials.json";
import { Navigate } from "react-router-dom";

function LoginForm({ setLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inavlidCredentials, setInvalidCredentials] = useState(false);

  const [userlogged, setUserLogged] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === Data.email && password === Data.password) {
      setLogin(true);
      localStorage.setItem("user", true);
      navigate("/home");
    } else {
      setInvalidCredentials(true);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Login Form</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="email-input"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(false);
            setInvalidCredentials(false);
          }}
          onBlur={() => !username && setUsernameError(true)}
        />
        {usernameError && <span>Field Required</span>}
        <input
          type="text"
          placeholder="Password"
          className="password-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
            setInvalidCredentials(false);
          }}
          onBlur={() => !password && setPasswordError(true)}
        />
        {passwordError && <span>Field Required</span>}
        <button className="login-button" disabled={!username || !password}>
          Log in
        </button>
        {inavlidCredentials && <span>Username and password doesnt match</span>}
      </form>
    </div>
  );
}

export default LoginForm;
