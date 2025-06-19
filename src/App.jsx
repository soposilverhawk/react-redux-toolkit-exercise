import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setUserName } from "./features/authSlice";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUserName(userInput));
    dispatch(login());
    setUserInput("");
  }

  return (
    <div>
      <h2>{isLoggedIn ? `Hello ${username}` : "Hello stranger"}</h2>

      {!isLoggedIn && (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleLogin}>Log in</button>
        </>
      )}

      {isLoggedIn && (
        <button onClick={() => dispatch(logout())}>Log out</button>
      )}
    </div>
  );
}

export default App;
