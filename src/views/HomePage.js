import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import moviesApi from '../services/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi.fetchMovieTrending().then(movies => this.setState({ movies }));

    // if (this.props.search !== prevProps.search) {
    //   let moviesObj = {};
    //   fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=e14194253cce820ed084a34e7bc2e9ec&language=en-US&query=spider&page=1&include_adult=false`,
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
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        {movies.length > 0 && (
          <ul className="trending-list">
            {movies.map(movie => (
              <li key={movie.id} className="trending-item">
                <NavLink
                  className="trending-item-link"
                  activeClassName="trending-item-link-active"
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
