import React, { Component } from 'react';
import moviesApi from '../services/moviesApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    moviesApi
      .fetchReview(this.props.movieId)
      .then(reviews => this.setState({ reviews }));
  }
  render() {
    console.log(this.state.reviews.results);
    const reviewsResult = this.state.reviews.results;
    return (
      <>
        {!reviewsResult ? (
          <span>We don't have any reviews for this movie.</span>
        ) : (
          <span>...</span>
        )}
      </>
    );
  }
}
