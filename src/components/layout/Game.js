import React, { Component } from "react";

import Answer from "./Inputs/Answer";
import Keyboard from "./Inputs/Keyboard";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.location.state;
  }

  syncAnswer = () => {
    document.getElementById("answer").value = this.state.playerWord;
  };

  // Keyboard Function
  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{bksp}") {
      // delete last letter
      this.setState({
        playerWord: this.state.playerWord.substr(
          0,
          this.state.playerWord.length - 1
        )
      });
    } else if (button === "{enter}") {
      // submit the word
    } else {
      // add letter to state
      this.setState((previousState) => ({
        playerWord: previousState.playerWord + button
      }));
    }
    this.syncAnswer();
  };

  // Answer Function
  handlePlayerInput = (e) => {
    this.setState({ playerWord: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Answer
          placeholder={"Type the word"}
          handleWord={this.handlePlayerInput}
        />
        <Keyboard onKeyPress={this.onKeyPress} />
      </React.Fragment>
    );
  }
}

export default Game;
