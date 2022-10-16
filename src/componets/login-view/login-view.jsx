import React, { useState } from "react";
import "../login-view/login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  return (
    <form className="logIn-Form">
      <label>
        Username: <space></space>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Password: <space></space>  
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
