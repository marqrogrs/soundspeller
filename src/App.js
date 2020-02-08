import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path={`${process.env.PUBLIC_URL}/`} />
            <Route path={`${process.env.PUBLIC_URL}/game`} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
