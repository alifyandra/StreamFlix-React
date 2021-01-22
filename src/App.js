import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StreamNavbar from "./pages/Navbar";
import Home from "./pages/home/Home";
import MoviePage from "./pages/details/MoviePage";
import Footer from "./pages/Footer";
import "./App.css";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "694f210a11567b3472a88c95b053d7e7";

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
            <Home
              ownedMovies={ownedMovies}
              API_URL={API_URL}
              API_KEY={API_KEY}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
