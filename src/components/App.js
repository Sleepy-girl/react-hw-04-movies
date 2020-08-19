import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
} from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
// import NotFound from '../views/NotFound';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <ul className="Navigation-list">
            <li>
              <NavLink
                exact
                to="/"
                className="Navigation-link"
                activeClassName="Navigation-link-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/movies"
                className="Navigation-link"
                activeClassName="Navigation-link-active"
              >
                Movies
              </NavLink>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            <Redirect to="/" />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;

// <HomePage />
// <MoviesPage>
//   <MovieDetailsPage>
//     <Cast />
//     <Reviews />
//   </MovieDetailsPage>
// </MoviesPage>
