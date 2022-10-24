import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Container, Row, Col } from "react-bootstrap";
import { RegistrationView } from "../registration-view/user-registration";
import { GenreView } from "../genre-view/genre-view";

//import "./main-view.scss";

export class MainView extends React.Component {
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
      .get("https://movieverseapi.herokuapp.com/movies", {
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
      .get("https://movieverseapi.herokuapp.com/movies")
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

    if (!user) {
      return (
        <Row>
          <Col>
            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
          </Col>
        </Row>
      );
    }

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <>
        <button onClick={() => { this.onLoggedOut() }}>Logout</button>
        <Router>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                return movies.map((m) => (
                  <Col md={3} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ));
              }}
            />
            <Route
              path="/movies/:movieId"
              render={({ match }) => {
                return (
                  <Col md={8}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                    />
                  </Col>
                );
              }}
            />
            <Route
              exact
              path="/genres/:Genres"
              render={({ match }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col md={8}>
                    <GenreView
                      genre={movies.find(
                        (m) => m.Genres === match.params.Genres
                      )}
                    />
                  </Col>
                );
              }}
            />
            <Route
              exact
              path="/register"
              render={
                <div>
                  <RegistrationView />
                </div>
              }
            />
          </Row>
        </Router>
      </>
    );
  }
}
