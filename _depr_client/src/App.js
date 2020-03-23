import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "./components/layout/Auth/Auth";
import ResetPassword from "./components/layout/Auth/ResetPassword";
import withAuth from "./components/layout/Auth/withAuth";

import Home from "./components/layout/Home";
import Game from "./components/layout/Game";
import Greetings from "./components/layout/Greetings";
import Navbar from "./components/layout/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  setAuthentificated = (bool) => {
    this.setState({ isAuthenticated: bool });
    console.log("triggred");
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Navbar isAuthenticated={isAuthenticated} />
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Greetings />} />
              <Route
                exact
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    setAuthentificated={this.setAuthentificated}
                  />
                )}
              />
              <Route
                exact
                path="/reset"
                render={(props) => <ResetPassword {...props} display="email" />}
              />
              <Route
                exact
                path="/reset/:token"
                render={(props) => (
                  <ResetPassword {...props} display="password" />
                )}
              />

              <Route exact path={"/home"} component={withAuth(Home)} />
              <Route path={"/Game"} component={Game} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
