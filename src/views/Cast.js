import React, { Component } from 'react';
import moviesApi from '../services/moviesApi';

export class Cast extends Component {
  state = {
    movies: [],
    casts: [],
  };
  componentDidMount() {
    // const movieId = this.props.match.params;
    // console.log(this.props.movieId);
    moviesApi.fetchCast(this.props.movieId).then(casts => {
      this.setState({ casts });
    });
  }

  render() {
    const { casts } = this.state;
    console.log('casts', casts);
    // console.log(this.props.match.params);
    // console.log(this.props);
    return (
      <>
        {casts && (
          <ul>
            {casts.map(cast => (
              <li key={cast.credit_id}>
                {cast.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                    width="100"
                  />
                )}
                <h4 className="cast-name">{cast.name}</h4>
                <span className="cast-character">
                  Character: {cast.character}
                </span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
