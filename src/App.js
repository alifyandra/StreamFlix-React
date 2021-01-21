import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StreamNavbar from "./pages/home/components/Navbar";
import Index from "./pages/home/Index";
import MoviePage from "./pages/details/MoviePage";

function App() {
  const [ownedMovies, setOwnedMovies] = useState([]);
  return (
    <Router>
      <StreamNavbar ownedMovies={ownedMovies} />
      <div className="container">
        <Switch>
          <Route path="/:id">
            <MoviePage queryParam={window.location.pathname} />
          </Route>
          <Route path="/">
            <Index ownedMovies={ownedMovies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
