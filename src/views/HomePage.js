import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import moviesApi from '../services/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi.fetchMovieTrending().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        {movies.length > 0 && (
          <ul className="movies-list">
            {movies.map(movie => (
              <li key={movie.id} className="movies-item">
                <NavLink
                  className="movies-item-link"
                  activeClassName="movies-item-link-active"
                  to={`${match.url}movies/${movie.id}`}
                >
                  {movie.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
