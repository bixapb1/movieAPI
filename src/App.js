import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/homepage";
import Favorite from "./components/favoriteMovie";
import { url } from "./components/const";

function App() {
  const [popularMovies, setPopularMovies] = useState("");
  const [search, setSearch] = useState("");
  const [myFavoriteList, setMyFavoriteList] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (search !== "") {
          const filter = Object.values(data)[1].filter((item) => {
            return item.title.toUpperCase().indexOf(search) > -1;
          });
          setPopularMovies(filter);
        } else {
          setPopularMovies(Object.values(data)[1]);
        }
      });
  }, [search]);

  return (
    <Router>
      <NavBar
        handlerSearch={(event) => {
          setSearch(event.target.value.toUpperCase());
        }}
      />
      <Switch>
        <Route exact path="/about">
          <Favorite
            myFavoriteList={myFavoriteList}
            setMyFavoriteList={setMyFavoriteList}
          />
        </Route>
        <Route exact path="/">
          <Home
            arrayMovies={popularMovies}
            myFavoriteList={myFavoriteList}
            setMyFavoriteList={setMyFavoriteList}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
