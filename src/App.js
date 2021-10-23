import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/HomePage";
import Favorite from "./components/FavoriteMovie";
import ViewerMovie from "./components/ViewerMovie";
export const Context = createContext();

function App() {
  const [arrayMovies, setArrayMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [myFavoriteList, setMyFavoriteList] = useState([]);
  const [viewerMovie, setViewerMovie] = useState([]);
  const getMovieRequest = async (search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=aba76a579f8ef1f0586b7ce86f0bf326&query=${search}&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setArrayMovies(Object.values(responseJson)[1]);
  };
  const getMoviePopular = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aba76a579f8ef1f0586b7ce86f0bf326&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setArrayMovies(Object.values(responseJson)[1]);
  };

  useEffect(() => {
    if (search !== "") {
      getMovieRequest(search);
    } else {
      getMoviePopular();
    }
  }, [search]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem("favorite-movie"));
    if (movieFavorites) {
      setMyFavoriteList(movieFavorites);
    }
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          arrayMovies,
          setArrayMovies,
          myFavoriteList,
          setMyFavoriteList,
          setViewerMovie,
        }}
      >
        <Router>
          <NavBar
            myFavoriteList={myFavoriteList}
            handlerSearch={(event) => {
              setSearch(event.target.value);
            }}
          />
          <Switch>
            <Route exact path="/favorite">
              <Favorite myFavoriteList={myFavoriteList} />
            </Route>
            <Route exact path="/">
              <Home arrayMovies={arrayMovies} />
            </Route>
            <Route exact path="/movie/:id">
              <ViewerMovie viewerMovie={viewerMovie} />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
