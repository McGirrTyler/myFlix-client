import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RegistrationView } from "../registration-view/user-registration";
import { NavLink } from "react-bootstrap";

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
      <Container style={{ width: 500 }}>
        <Row>
          <Col>
            <CardGroup>
              <Card style={{ marginTop: 100, marginBottom: 50, width: 30 }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <h1> Login </h1>
                  </Card.Title>
                  <Card.Subtitle style={{ textAlign: "center" }}>
                    <p> Don't have an account with us yet? Sign up <NavLink src={<RegistrationView/>}>here</NavLink></p>
                  </Card.Subtitle>
                  <Form>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Log In
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
  );
}
