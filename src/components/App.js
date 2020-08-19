import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import NotFound from '../views/NotFound';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Route component={NotFound} />
        </Switch>
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
