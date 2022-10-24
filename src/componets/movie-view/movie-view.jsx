import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img
            crossOrigin="anonymous"
            src={movie.ImagePath}
            style={{ width: 300 }}
          />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genres">
      <Link to="/genres/:Genres">
        <Button variant="link">
          <span className="label">Genres: </span>
          <span className="value">{movie.Genres + " "}</span>
          </Button>
          </Link>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director + " "}</span>
        </div>
        <div className="movie-writers">
          <span className="label">Writers: </span>
          <span className="value">{movie.Writers + " "}</span>
        </div>
        <div className="movie-topactors">
          <span className="label">Stars: </span>
          <span className="value">{movie.TopActors + ""}</span>
        </div>
        <div className="movie-rating">
          <span className="label">Parental Guide: </span>
          <span className="value">{movie.Rating}</span>
        </div>
        <div className="movie-runtime">
          <span className="label">Runtime: </span>
          <span className="value">{movie.Runtime}</span>
        </div>
        <div className="movie-releaseyear">
          <span className="label">Year of Released: </span>
          <span className="value">{movie.ReleaseYear}</span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
    );
  }
}
