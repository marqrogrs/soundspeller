import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Keyboard from "./components/layout/Inputs/Keyboard";
import MyKeyboard from "./components/layout/Inputs/MyKeyboard";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container ">
          <Keyboard />
          <MyKeyboard />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
