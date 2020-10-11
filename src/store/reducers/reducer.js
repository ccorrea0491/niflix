import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: null,
  trending: null,
  topRated: null,
  movieInfo: null,
  searchResults: null,
  searchInput: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.data,
      };
    case actionTypes.GET_TRENDING_SUCCESS:
      return {
        ...state,
        trending: action.data,
      };
    case actionTypes.GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        topRated: action.data,
      };
    case actionTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movieInfo: action.data,
      };
    case actionTypes.INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.data,
      };
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
