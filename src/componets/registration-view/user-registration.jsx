import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Row, Col, Button, Container, Form } from "react-bootstrap";

export function RegistrationView(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //Hook
  const [values, setValues] = useState({
    nameErr: "",
    usernameErr: "",
    passwordErr: "",
    emailErr: "",
  });

  //input validation
  const validate = () => {
    let isReq = true;
    if (name) {
      setValues({ ...values, nameErr: "Name is Required" });
      isReq = false;
    }
    if (!username) {
      setValues({ ...values, usernameErr: "Username is Required" });
      isReq = false;
    } else if (username.length < 5) {
      setValues({
        ...values,
        usernameErr: "Username must be at least 5 characters long",
      });
      isReq = false;
    }
    if (!password) {
      setValues({ ...values, passwordErr: "Password Required" });
      isReq = false;
    } else if (password.length < 6) {
      setValues({
        ...values,
        passwordErr: "Password must be atleast 6 characters long",
      });
      isReq = false;
    }
    if (!email) {
      setValues({ ...values, emailErr: "Email Required" });
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setValues({ ...values, emailErr: "Email is invalid" });
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      // Server Auth
      axios
        .post("https://movieverseapi.herokuapp.com/users", {
          Name: name,
          Username: username,
          Password: password,
          Email: email,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration succesful, please login!");
          window.open("/", "_self");
        })
        .catch((response) => {
          console.error(response);
          alert("Unable to Register");
        });
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <Form>
            <h3> Sign Up </h3>
            <p></p>

            <Form.Group controlId="formName" className="reg-form-inputs">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {values.nameErr && <p>{values.nameErr}</p>}
            </Form.Group>

            <Form.Group controlId="formUsername" className="reg-form-inputs">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {values.usernameErr && <p>{values.usernameErr}</p>}
            </Form.Group>

            <Form.Group controlId="formPassword" className="reg-form-inputs">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {values.passwordErr && <p>{values.passwordErr}</p>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="reg-form-inputs">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {values.usernameErr && <p>{values.usernameErr}</p>}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Create Account
            </Button>
            <p></p>
            <p>
              {" "}
              Already registered? <Link to={"/"}>Sign In</Link>Here
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
  }),
};
