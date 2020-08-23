import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import moviesApi from '../services/moviesApi';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    movie: {},
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi.fetchMovieDetails(movieId).then(movie => {
      this.setState({ movie });
      // console.log(movie);
    });
  }

  render() {
    const { match } = this.props;
    const movieId = this.props.match.params.movieId;
    const { movie } = this.state;
    // const genres = movie.genres;
    // genres && console.log(genres);

    // genres.map(gender => console.log('gender.name', gender.name));
    // console.log(this.state.movie);

    return (
      <>
        {}
        <button type="button" onClick={() => {}} className="go-back">
          &larr; Go back
        </button>
        <div className="MovieDetailsPage">
          <div className="details-image-wrapper">
            {movie.poster_path && (
              <img
                className="details-image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            )}
          </div>
          <div className="details-content-wrapper">
            <h2 className="title">{movie.title}</h2>
            <span className="user-score">User score: {movie.vote_average}</span>
            <h3 className="over-view-title">Overview</h3>
            <p className="over-view">{movie.overview}</p>
            <h4 className="genres-title">Genres:</h4>
            {/* {movie.genres && (
              <ul className="genres">
                Genres: movie.genres.map(
                <li key={genre.id} className="genre-item">
                  {genre.name}
                </li>
                , ) //! массив с жанрами отказывается перебератся
              </ul>
            )} */}
          </div>
        </div>
        <hr />
        <span className="additional-information-title">
          Additional information
        </span>
        <ul className="additional-information-list">
          <li className="additional-information-item">
            <NavLink
              to={`${match.url}/cast`}
              activeClassName="additional-information-item-link"
            >
              Cast
            </NavLink>
          </li>
          <li className="additional-information-item">
            <NavLink
              to={`${match.url}/reviews`}
              activeClassName="additional-information-item-link"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route
            path={`${match.url}/cast`}
            render={props => <Cast {...props} movieId={movieId} />}
          />
          <Route
            path={`${match.url}/reviews`}
            render={props => <Reviews {...props} movieId={movieId} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
