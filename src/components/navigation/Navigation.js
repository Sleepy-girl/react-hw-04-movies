import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

function Navigation() {
  return (
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
          // exact  // activeClassName будет действовать по четкому совпадению для /movies
          to="/movies"
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
