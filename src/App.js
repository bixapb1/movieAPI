import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Favorite from "./components/FavoriteMovie";
import ViewerMovie from "./components/ViewerMovie";
import {
  getLocalStorage,
  fetchMoviesPopulars,
  fetchSearchMovies,
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
    dispatch(getLocalStorage());
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
