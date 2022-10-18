import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

//import "../login-view/login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter your Username" onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Log In
      </Button>
    </Form>
  );
}
