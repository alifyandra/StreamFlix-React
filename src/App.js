import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StreamNavbar from "./pages/home/components/Navbar";
import Index from "./pages/home/Index";
import MoviePage from "./pages/details/MoviePage";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.MY_API_KEY;

function App() {
  const [ownedMovies, setOwnedMovies] = useState([]);
  const [pathName, setPathName] = useState(window.location.pathname);
  const [balance, setBalance] = useState(100000);
  const [currPage, setCurrPage] = useState(1);

  return (
    <Router>
      <StreamNavbar ownedMovies={ownedMovies} balance={balance} />
      <div className="container">
        <Switch>
          <Route path="/:id">
            <MoviePage
              pathName={pathName}
              setPathName={setPathName}
              ownedMovies={ownedMovies}
              setOwnedMovies={setOwnedMovies}
              API_URL={API_URL}
              API_KEY={API_KEY}
              balance={balance}
              setBalance={setBalance}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </Route>
          <Route path="/">
            <Index
              ownedMovies={ownedMovies}
              API_URL={API_URL}
              API_KEY={API_KEY}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
