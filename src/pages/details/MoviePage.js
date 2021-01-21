import React, { useEffect, useState } from "react";
import axios from "axios";
import getPrice from "../../utils/getPrice";
import Title from "./components/Title";
import Poster from "./components/Poster";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Purchase from "./components/Purchase";

const MoviePage = ({
  ownedMovies,
  setOwnedMovies,
  pathName,
  setPathName,
  API_URL,
  API_KEY,
  balance,
  setBalance,
}) => {
  const [movie, setMovie] = useState({});
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    setPathName(window.location.pathname);
    var splitIndex = pathName.indexOf("-");
    var [movieId] = [
      pathName.slice(0, splitIndex),
      pathName.slice(splitIndex + 1),
    ];
    console.log(movieId);
    axios
      .get(
        API_URL + "/movie" + movieId + "?api_key=" + API_KEY + "&language=en-us"
      )
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      });
  }, [pathName]);
  console.log(movie);
  return (
    <div className="container" style={{ padding: "1.5em" }}>
      <Title movieTitle={movie.original_title} />
      <Poster imgUrl={movie.poster_path} />
      <Rating rating={movie.vote_average} />
      <Description desc={movie.overview ? movie.overview : "No description"} />
      <Purchase
        movieId={movie.id}
        price={getPrice(movie)}
        owned={ownedMovies.includes(movie.id)}
        setOwnedMovies={setOwnedMovies}
        ownedMovies={ownedMovies}
        balance={balance}
        setBalance={setBalance}
      />
    </div>
  );
};

export default MoviePage;
