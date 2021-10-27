import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Favorite from "./components/FavoriteMovie";
import ViewerMovie from "./components/ViewerMovie";

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const getMovieRequest = async (search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=aba76a579f8ef1f0586b7ce86f0bf326&query=${search}&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch({ type: "setArrayMovies", payload: responseJson.results });
  };
  const getMoviePopular = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch({ type: "setArrayMovies", payload: responseJson.results });
  };

  useEffect(() => {
    if (search !== "") {
      getMovieRequest(search);
    } else {
      getMoviePopular();
    }
  });

  useEffect(() => {
    dispatch({ type: "LocalStorage" });
  });

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
