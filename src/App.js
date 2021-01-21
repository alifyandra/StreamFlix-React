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
import Index from "./pages/home/Index";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

function App() {
  return (
    <Router>
      <StreamNavbar />
      <div className="container">
        <Switch>
          <Route path="/">
            <Index />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
