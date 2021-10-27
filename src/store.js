import { createStore } from "redux";

const initStore = {
  arrayMovies: [],
  search: "",
  myFavoriteMovies: [],
  viewerMovie: [],
};

function reducer(state = initStore, action) {
  switch (action.type) {
    case "setArrayMovies": {
      return { ...state, arrayMovies: action.payload };
    }
    case "search": {
      return { ...state, search: action.payload };
    }
    case "myFavoriteMovies":
      return {
        ...state,
        myFavoriteMovies: action.payload,
      };
    case "setViewerMovie":
      return {
        ...state,
        viewerMovie: action.payload,
      };
    case "LocalStorage":
      return {
        ...state,
        myFavoriteMovies: JSON.parse(localStorage.getItem("favorite-movie")),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;
