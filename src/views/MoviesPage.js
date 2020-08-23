import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import moviesApi from '../services/moviesApi';
import ResultsOfSearch from '../components/ResultsOfSearch';
import routes from '../routes';
import MovieDetailsPage from './MovieDetailsPage';
import Searchbox from '../components/Searchbox';
import getQueryParams from '../utils/getQueryParams';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      console.log('можно фетчить');
    }
    // moviesApi
    //   .fetchMovieWithQuery('spider')
    //   .then(movies => this.setState({ movies }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);

    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    console.log('prevQuery', prevQuery);
    console.log('nextQuery', nextQuery);

    if (prevQuery !== nextQuery) {
      moviesApi
        .fetchMovieWithQuery(nextQuery)
        .then(movies => this.setState({ movies }));
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // console.log(this.state.searchQuery);
  //   this.props.onSubmit(this.state.searchQuery);
  //   this.setState({ searchQuery: '' });
  // };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    console.log(movies);
    return (
      <>
        <Searchbox inSubmit={this.handleChangeQuery} />
        {movies && (
          <ul className="movies-list">
            {movies.map(movie => (
              <li key={movie.id} className="movies-item">
                <NavLink
                  className="movies-item-link"
                  activeClassName="movies-item-link-active"
                  to={`${match.url}/${movie.id}`}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        {/* <Route path={`${match.path}/:movieId`} component={MovieDetailsPage} /> */}
      </>
    );
  }
}

export default MoviesPage;
