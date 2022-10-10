import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "21 Bridges",
          Description:
            "Filer text. Nasfkds asjkfk sdfkjdsf ksdjfkv jf kjdsfjkdf dskjf mdsfnksnf fsdnf sd.",
          ImagePath:
            "https://m.media-amazon.com/images/M/MV5BMTQ0NWFiNjgtYzg0OS00YWRlLTgxZDYtZDM3ZGEzYTBkODU3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        },
        {
          _id: 2,
          Title: "Central Intelligence",
          Description:
            "Filer text. Nasfkds asjkfk sdfkjdsf ksdjfkv jf kjdsfjkdf dskjf mdsfnksnf fsdnf sd.",
          ImagePath:
            "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg",
        },
        {
          _id: 3,
          Title: "The Adam Project",
          Description:
            "Filer text. Nasfkds asjkfk sdfkjdsf ksdjfkv jf kjdsfjkdf dskjf mdsfnksnf fsdnf sd.",
          ImagePath:
            "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        },
      ],
      selectedMovies: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
