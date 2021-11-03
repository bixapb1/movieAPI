import {
  MOVIES,
  SEARCH,
  FAVORITE_MOVIES,
  VIEWER_MOVIE,
  LOCAL_STORAGE,
} from "./types";

const initStore = {
  arrayMovies: [],
  search: "",
  myFavoriteMovies: [],
  viewerMovie: [],
};

export const movieReducer = (state = initStore, action) => {
  switch (action.type) {
    case MOVIES: {
      return { ...state, arrayMovies: action.payload };
    }
    case SEARCH: {
      return { ...state, search: action.payload };
    }
    case FAVORITE_MOVIES:
      return {
        ...state,
        myFavoriteMovies: action.payload,
      };
    case VIEWER_MOVIE:
      return {
        ...state,
        viewerMovie: action.payload,
      };
    case LOCAL_STORAGE:
      return {
        ...state,
        myFavoriteMovies:
          JSON.parse(localStorage.getItem("favorite-movie")) || [],
      };
    default:
      return state;
  }
};
