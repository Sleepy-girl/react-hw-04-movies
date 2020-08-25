import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import moviesApi from '../services/moviesApi';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    movie: {},
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi.fetchMovieDetails(movieId).then(movie => {
      this.setState({ movie });
    });
  }

  handleGoBack = () => {
    const { location, history, query } = this.props;
    console.log('location', location);

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    // if (location.state?.from) { //! аналогичная запись, как вверху. проверка с вложенностями
    //   return history.push(location.state.from);
    // }

    this.props.history.push({
      pathname: routes.movies,
      state: location,
    });
  };

  render() {
    const { match, location } = this.props;
    const movieId = this.props.match.params.movieId;
    const { movie } = this.state;
    console.log('movie.genres', movie.genres);

    return (
      <>
        {}
        <button type="button" onClick={this.handleGoBack} className="go-back">
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
            <span className="user-score">
              User score: {movie.vote_average * 10}%
            </span>
            <h3 className="over-view-title">Overview</h3>
            <p className="over-view">{movie.overview}</p>
            <h4 className="genres-title">Genres:</h4>
            {movie.genres && (
              <ul className="genres">
                {movie.genres.map(genre => (
                  <li key={genre.id} className="genre-item">
                    {genre.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <hr />
        <span className="additional-information-title">
          Additional information
        </span>
        <ul className="additional-information-list">
          <li className="additional-information-item">
            <NavLink
              to={{ pathname: `${match.url}/cast`, state: location.state }}
              activeClassName="additional-information-item-link"
            >
              Cast
            </NavLink>
          </li>
          <li className="additional-information-item">
            <NavLink
              to={{ pathname: `${match.url}/reviews`, state: location.state }}
              activeClassName="additional-information-item-link"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={props => <Cast {...props} movieId={movieId} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={props => <Reviews {...props} movieId={movieId} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
