import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StreamNavbar from "./components/Navbar";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "694f210a11567b3472a88c95b053d7e7";

const fetchMovies = (url) => {};

function App() {
  const [ownedMovies, setOwnedMovies] = useState([]);
  const [balance, setBalance] = useState(100000);
  const [movieList, setMovieList] = useState([]);

  function getPageQuery() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get("page") ? params.get("page") : 1;
  }

  useEffect(() => {
    axios
      .get(
        API_URL +
          "/movie/now_playing?api_key=" +
          API_KEY +
          "&page=" +
          getPageQuery() +
          "&region=id"
      )
      .then((res) => {
        console.log(res);
        res.data.results.map((film) => {
          film.owned = ownedMovies.includes(film.id);
        });
        setMovieList(res.data.results);
      });
  }, []);

  return (
    <Router>
      <StreamNavbar balance={balance} />
      <div className="container">
        <Switch>
          <Route path="/">
            <Header />

            <MovieList movieList={movieList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
