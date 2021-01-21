import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import StreamNavbar from "./components/Navbar";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "694f210a11567b3472a88c95b053d7e7";

const fetchMovies = (url) => {};

function App() {
  const [ownedMovies, setOwnedMovies] = useState([]);
  const [balance, setBalance] = useState(100000);
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState([]);

  function getPageQuery() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get("page") ? params.get("page") : 1;
  }

  // function setPaginator() {
  //   let items = [];
  //   for (let number = 1; number <= pages; number++) {
  //     console.log(number);
  //     items.push(
  //       <Link to={"/?page=" + number}>
  //         <Pagination.Item key={number} active={number == getPageQuery()}>
  //           {number}
  //         </Pagination.Item>
  //       </Link>
  //     );
  //   }
  //   return items;
  // }
  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        API_URL +
          "/movie/now_playing?api_key=" +
          API_KEY +
          "&page=" +
          getPageQuery()
        // "&region=id"
      )
      .then((res) => {
        console.log(res);
        let total_pages = res.data.total_pages;
        res.data.results.map((film) => {
          film.owned = ownedMovies.includes(film.id);
        });
        setMovieList(res.data.results);

        setPages(() => {
          let items = [];
          for (let number = 1; number <= total_pages; number++) {
            console.log(getPageQuery());
            const handleOnClick = (n) => history.push("/?page=" + n);
            items.push(
              <Link to={"/?page=" + number}>
                <Pagination.Item
                  key={number}
                  active={number == getPageQuery()}
                  onClick={() => handleOnClick(number)}
                >
                  {number}
                </Pagination.Item>
              </Link>
            );
            console.log(items);
          }
          return items;
        });
      });
  }, [ownedMovies]);

  return (
    <Router>
      <StreamNavbar balance={balance} />
      <div className="container">
        <Switch>
          <Route path="/">
            <Header />
            <Pagination>{pages}</Pagination>

            <MovieList movieList={movieList} />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
