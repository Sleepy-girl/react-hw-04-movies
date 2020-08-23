import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import moviesApi from '../services/moviesApi';
import ResultsOfSearch from './ResultsOfSearch';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    // error: false,
  };

  componentDidMount() {
    // const { inpuyValue } = this.state;
    // console.log(this.state.movies);
    // console.log(this.props.location);
    // if (this.props.location.search) {
    //   const searchQuery = this.props.location.search;
    //   this.fetchMovies(searchQuery);
    // }
    // moviesApi
    //   .fetchMovieWithQuery('spider')
    //   .then(movies => this.State({ movies }));

    // moviesApi.fetchMovieWithQuery('spider').then(console.log);

    moviesApi
      .fetchMovieWithQuery('spider')
      .then(movies => this.setState({ movies }));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevQuery = prevState.searchQuery;
  //   const nextQuery = this.state.searchQuery;

  // if (prevQuery !== nextQuery) {
  //   this.fetchMovies(); //запрос
  // }
  // if (this.props.search !== prevProps.search) {
  //   let moviesObj = {};
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=e14194253cce820ed084a34e7bc2e9ec&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result);
  //       moviesObj = result.results;
  //       return moviesObj;
  //     })
  //     .then(
  //       () => this.setState(moviesObj),
  //       error => this.setState({ error }),
  //     );
  // }
  // }

  // fetchMovies = async searchQuery => {
  //   const { searchQuery } = this.state;
  //   // this.setState({ loading: true });
  //   try {
  //     const result = await fetchMovieWithQuery(searchQuery);
  //     this.setState({ movies: result.data.results });
  //     this.errorToggle(false);
  //     }catch {
  //       this.errorToggle(true);
  //     }
  //   }
  // moviesApi
  //   .fetchMovieWithQuery(searchQuery)
  //   .then(movies =>
  //     this.setState(prevState => ({
  //       movies: [...prevState.movies, ...movies],
  //       page: prevState.page + 1,
  //     })),
  //   )
  //   .catch(error => this.setState({ error }));
  // .finally(() => this.setState({ loading: false }));
  // };
  // errorToggle = (status) => {
  //   this.setState({
  //     error: status,
  //   });
  // };

  // handleChange = e => {
  //   this.setState({ searchQuery: e.target.value });
  // };

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
        <form className="search-form">
          <input
            className="SearchFormInput"
            type="text"
            // value={this.state.searchQuery}
            // onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search movies"
          />
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="SearchFormButton"
          >
            <span className="SearchFormButtonLabel">Search</span>
          </button>
        </form>
        ResultsOfSearch
        {/* <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${match.url}/${movie.id}`}>{movie.name}</NavLink>
            </li>
          ))}
        </ul> */}
        {movies.length > 0 && (
          <ul className="trending-list">
            {movies.map(movie => (
              <li key={movie.id} className="trending-item">
                <NavLink
                  className="trending-item-link"
                  activeClassName="trending-item-link-active"
                  to={`${match.url}movies/${movie.id}`}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
