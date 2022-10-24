/* import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Container, Row, Col } from "react-bootstrap";
import { LoginView } from "../login-view/login-view";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
*/

/* export class GenreView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovies: null,
      user: null,
    };
  }

  getMovies(token) {
    axios
      .get("https://movieverseapi.herokuapp.com/movies/genres/:Genres", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get("https://movieverseapi.herokuapp.com/movies/genres/:Genres")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, user } = this.state;

    if (!user)
      return (
        <Row>
          <Col>
            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
          </Col>
        </Row>
      );
    if (movies.length === 0) return <div className="main-view" />;

    return (
        <MovieView/>
    );
  }
}
*/
