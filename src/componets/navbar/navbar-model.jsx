import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">MovieVerse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Explore</Nav.Link>
            <Nav.Link href="#features">Universes</Nav.Link>
            <Nav.Link href="#pricing">MyProfile</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
