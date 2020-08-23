import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';
import Layout from './Layout';
// import NotFound from '../views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Redirect to={routes.home} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
