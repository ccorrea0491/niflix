import * as actionTypes from "./actionTypes";
import axios from "../../axios-movies";

export const getMoviesStarted = () => {
  return {
    type: actionTypes.GET_MOVIES_STARTED,
  };
};

export const getMoviesSuccess = (data) => {
  return {
    type: actionTypes.GET_MOVIES_SUCCESS,
    data: data,
  };
};

export const getMoviesFail = () => {
  return {
    type: actionTypes.GET_MOVIES_FAIL,
  };
};

export const getMovies = () => {
  return (dispatch) => {
    dispatch(getMoviesStarted());
    axios
      .get(
        "/movie/popular?api_key=" +
          process.env.API_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        dispatch(getMoviesSuccess(response.data.results));
      });
  };
};

export const getTrendingStarted = () => {
  return {
    type: actionTypes.GET_TRENDING_STARTED,
  };
};

export const getTrendingSuccess = (data) => {
  return {
    type: actionTypes.GET_TRENDING_SUCCESS,
    data: data,
  };
};

export const getTrendingFail = () => {
  return {
    type: actionTypes.GET_TRENDING_FAIL,
  };
};

export const getTrending = () => {
  return (dispatch) => {
    dispatch(getTrendingStarted());
    axios
      .get(
        "/trending/all/day?api_key=" +
          process.env.API_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        dispatch(getTrendingSuccess(response.data.results));
      });
  };
};

export const getTopRatedStarted = () => {
  return {
    type: actionTypes.GET_TOP_RATED_STARTED,
  };
};

export const getTopRatedSuccess = (data) => {
  return {
    type: actionTypes.GET_TOP_RATED_SUCCESS,
    data: data,
  };
};

export const getTopRatedFail = () => {
  return {
    type: actionTypes.GET_TOP_RATED_FAIL,
  };
};

export const getTopRated = () => {
  return (dispatch) => {
    dispatch(getTopRatedStarted());
    axios
      .get(
        "/movie/top_rated?api_key=" +
          process.env.API_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        dispatch(getTopRatedSuccess(response.data.results));
      });
  };
};

export const getMovieStarted = () => {
  return {
    type: actionTypes.GET_MOVIE_STARTED,
  };
};

export const getMovieSuccess = (data) => {
  return {
    type: actionTypes.GET_MOVIE_SUCCESS,
    data: data,
  };
};

export const getMovieFail = () => {
  return {
    type: actionTypes.GET_MOVIE_FAIL,
  };
};

export const getMovie = (id) => {
  return (dispatch) => {
    dispatch(getMovieStarted());
    axios
      .get(
        "/movie/" + id + "?api_key=" + process.env.API_KEY + "&language=en-US"
      )
      .then((response) => {
        const info = Object.keys(response.data).map((movie) => {
          return { [movie]: response.data[movie] };
        });
        dispatch(getMovieSuccess(info));
      });
  };
};
// PASS MOVIE DATA TO MODAL
