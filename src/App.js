import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StreamNavbar from "./pages/Navbar";
import Index from "./pages/home/Index";

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
