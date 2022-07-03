import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Favorite from "./components/FavoriteMovie";
import ViewerMovie from "./components/ViewerMovie";
import {
  fetchMoviesPopulars,
  fetchSearchMovies,
  favoriteMovies,
} from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    if (search !== "") {
      dispatch(fetchSearchMovies());
    } else {
      dispatch(fetchMoviesPopulars());
    }
  }, [dispatch, search]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favorite-movie"))) {
      const getLocalStorage = JSON.parse(
        localStorage.getItem("favorite-movie")
      );
      dispatch(favoriteMovies(getLocalStorage));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie/:id">
            <ViewerMovie />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
