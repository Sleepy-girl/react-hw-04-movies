import React, { Component } from 'react';
import moviesApi from '../services/moviesApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props;
    moviesApi.fetchReview(movieId).then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {!reviews ? (
          <span>We don't have any reviews for this movie.</span>
        ) : (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h4>Autor: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
