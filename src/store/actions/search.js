import * as actionTypes from "./actionTypes";
import axios from "../../axios-movies";

export const searchStarted = () => {
  return {
    type: actionTypes.SEARCH_STARTED,
  };
};

export const searchSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    data: data,
  };
};

export const searchFail = (error) => {
  return {
    type: actionTypes.SEARCH_FAIL,
    error: error,
  };
};

export const search = (query) => {
  return (dispatch) => {
    dispatch(searchStarted());
    axios
      .get(
        `/search/movie?api_key=e3a076d9a44a6cc788be35e6a31583a9&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        dispatch(searchSuccess(response.data.results));
      })
      .catch((error) => dispatch(searchFail(error)));
  };
};

export const searchInput = (data) => {
  return {
    type: actionTypes.INPUT_SEARCH,
    data: data,
  };
};
