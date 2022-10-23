import React from "React";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img crossOrigin="anonymous" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Subtitle>{[movie.Rating, movie.ReleaseYear]}</Card.Subtitle>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
          <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );

    // return (
    // <div onClick={() => onMovieClick(movie)} className="movie-card">
    //{movie.Title}
    // </div>
    //);
    //}
    //}

    MovieCard.propTypes = {
      movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genres: PropTypes.array.isRequired,
        Director: PropTypes.array.isRequired,
        Writers: PropTypes.array.isRequired,
        TopActors: PropTypes.array.isRequired,
        Rating: PropTypes.string.isRequired,
        Runtime: PropTypes.string.isRequired,
        ReleaseYear: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
      }).isRequired,
      onMovieClick: PropTypes.func.isRequired,
    };
  }
}
