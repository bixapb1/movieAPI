import {
  MOVIES,
  SEARCH,
  FAVORITE_MOVIES,
  VIEWER_MOVIE,
  LOCAL_STORAGE,
} from "./types";

export function setMovies(movies) {
  return { type: MOVIES, payload: movies };
}
export function search(search) {
  return { type: SEARCH, payload: search };
}
export function favoriteMovies(favorite) {
  return { type: FAVORITE_MOVIES, payload: favorite };
}
export function setViewerMovie(movie) {
  return { type: VIEWER_MOVIE, payload: movie };
}
export function getLocalStorage() {
  return { type: LOCAL_STORAGE };
}

export function fetchMoviesPopulars() {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setMovies(responseJson.results));
  };
}

export function fetchSearchMovies() {
  return async (dispatch, getState) => {
    const search = getState().search;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=aba76a579f8ef1f0586b7ce86f0bf326&query=${search}&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setMovies(responseJson.results));
  };
}

export function fetchMovieView(id) {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setViewerMovie(responseJson));
  };
}
