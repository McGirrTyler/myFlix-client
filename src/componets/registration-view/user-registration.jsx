import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://movieverseapi.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email
  })
  .then(response => {
    const data =response.data;
    console.log(data);
    window.open('/', '_self');
    // _self makes page open within current page
  })
  .catch(err => {
    console.log('Error registering the user');
    alert('Something wasn\'t entered right.');
  })
};

return (
  <>
   <Container>
    <Row>
      <Col>
      Hello World
      </Col>
    </Row>
   </Container>
  </>
);
}
