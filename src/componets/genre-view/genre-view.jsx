import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Container, Row, Col } from "react-bootstrap";
import { LoginView } from "../login-view/login-view";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export class GenreView extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <Link to={"/"}>
          <Button variant="link">Back</Button>
        </Link>
      </div>
    );
  }
}
