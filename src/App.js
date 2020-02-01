import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Game from "./components/layout/Game";
import Home from "./components/layout/Home";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/game`} component={Game} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
