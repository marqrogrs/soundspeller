import React, { Component } from "react";

import Keyboard from "./Keyboard/Keyboard";
import Word from "./Inputs/Answer";

class HOC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      word: ""
    };
  }
  // Keyboard Function
  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{bksp}") {
      // delete last letter
      this.setState({
        word: this.state.word.substr(0, this.state.word.length - 1)
      });
    } else if (button === "{enter}") {
      // submit the word
    } else {
      // add letter to state
      this.setState((previousState) => ({
        word: previousState.word + button
      }));
    }
  };

  render() {
    return (
      <React.Fragment>
        <Word placeholder={"Type the word"} />
        <Keyboard onKeyPress={this.onKeyPress} />
      </React.Fragment>
    );
  }
}

export default HOC;
