import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e14194253cce820ed084a34e7bc2e9ec';

const fetchMovieWithQuery = searchQuery => {
  return axios
    .get(
      `${baseURL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response);
};

const fetchMovieTrending = () => {
  return axios
    .get(`${baseURL}/trending/movies/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const fetchCast = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

const fetchReview = movieId => {
  return axios
    .get(
      `${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data);
};

export default {
  fetchMovieDetails,
  fetchCast,
  fetchReview,
  fetchMovieTrending,
  fetchMovieWithQuery,
};
