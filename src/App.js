import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StreamNavbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <StreamNavbar />
      <div className="container"></div>
    </Router>
  );
}

export default App;
