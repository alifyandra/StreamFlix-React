import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StreamNavbar from "./components/Navbar";
import Header from "./components/Header";
import axion from "axion";
const API_URL = "https://api.themoviedb.org/3";

function App() {
  function getPageQuery() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get("query");
  }

  console.log(getPageQuery());

  return (
    <Router>
      <StreamNavbar />
      <div className="container">
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
