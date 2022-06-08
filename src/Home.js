import React, { useState } from "react";
import { useNavigate } from "react-router";

function Home({ setLogin }) {
  const navigate = useNavigate();

  const [state, setState] = useState([]);

  const handleSubmit = () => {
    setState([{}, ...state]);
  };

  const handleDelete = (index) => {
    state.splice(index, 1);
    setState([...state]);
  };

  return (
    <div className="container">
      <button
        className="add-button"
        style={{
          padding: "6px 15px",
          marginLeft: "5px",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "5px ",
        }}
        onClick={handleSubmit}
      >
        Add
      </button>
      {state.map((v, i) => {
        return (
          <div className="">
            <input
              type="text"
              placeholder=""
              style={{
                padding: "6px 5px",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
            />
            <button
              className="add-button"
              style={{
                padding: "6px 15px",
                marginLeft: "5px",
                backgroundColor: "orange",
                border: "none",
                borderRadius: "5px ",
              }}
              onClick={handleSubmit}
            >
              Add
            </button>
            {i !== 0 ? (
              <button
                className="add-button"
                style={{
                  padding: "6px 15px",
                  marginLeft: "5px",
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "5px ",
                }}
                onClick={() => handleDelete(i)}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}

      <div>
        <button
          style={{
            padding: "6px 15px",
            marginLeft: "5px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "5px ",
            marginTop: "50px",
          }}
          onClick={() => {
            setLogin(false);
            localStorage.removeItem("user");
            navigate("/login-form");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;
