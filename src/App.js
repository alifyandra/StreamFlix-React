import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StreamNavbar from "./components/Navbar";
import Header from "./components/Header";
import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";

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

  return (
    <Router>
      <StreamNavbar />
      <div className="container">
        <Switch>
          <Route path="/">
            <Header />
            <MovieList ownedMovies={ownedMovies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
