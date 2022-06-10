import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, showPosts } from "./Redux/Actions";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState([]);
  // const [posts, setPosts] = useState([]);

  const posts = useSelector((state) => state.posts);

  const handleSubmit = () => {
    setState([{}, ...state]);
  };

  const handleDelete = (index) => {
    state.splice(index, 1);
    setState([...state]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch(showPosts(json));
        // setPosts(json);
      });
  }, []);

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

      {posts.length &&
        posts.map((item) => (
          <>
            <h3>UserId: {item.userId}</h3>
            <h1>id: {item.id}</h1>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
          </>
        ))}

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
            // setLogin(false);
            dispatch(logoutUser());
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
