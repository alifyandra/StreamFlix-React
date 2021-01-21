import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import axios from "axios";
import Paginator from "./components/Paginator";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "694f210a11567b3472a88c95b053d7e7";

const Index = () => {
  const [ownedMovies, setOwnedMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);

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
        setTotalPages(res.data.total_pages);
        res.data.results.map((film) => {
          film.owned = ownedMovies.includes(film.id);
        });
        setMovieList(res.data.results);
        setCurrPage(getPageQuery);
      });
  }, [ownedMovies, currPage]);

  return (
    <>
      <Header />
      <Paginator
        pages={totalPages}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      <MovieList movieList={movieList} />
    </>
  );
};

export default Index;
