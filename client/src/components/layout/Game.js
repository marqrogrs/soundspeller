import React, { Component } from "react";

import Keyboard from "./Inputs/Keyboard";
import Answer from "./Inputs/Answer";

class Game extends Component {
  state = {
    words: [
      {
        word: "SHIPPED",
        syll: "ship.p.ed",
        phon: "SH IH P-P-T",
        grap: "SH,I,P,P,ED"
      }
    ],
    playerAnswer: "",
    level: 1
  };

  // Player Input from Mechanical Keyboard
  handlePlayerInput = (e) => {
    this.setState({ playerAnswer: e.target.value });
  };

  // Update Answer Component
  handleUpdate = (value) => {
    this.setState((prevState) => ({
      playerAnswer: prevState.playerAnswer + value
    }));
    document.getElementById("answer").value = this.state.playerAnswer;
  };

  // Delete Answer Component
  handleDelete = () => {
    this.setState({
      playerAnswer: this.state.playerAnswer.substr(
        0,
        this.state.playerAnswer.length - 1
      )
    });
    document.getElementById("answer").value = this.state.playerAnswer;
  };

  speak = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  interval = (syll) => {};

  componentDidMount() {
    switch (this.state.level) {
      default:
        break;
      case 2:
        console.log("Level 2");
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Answer
          placeholder={"Type the word"}
          handlePlayerInput={this.handlePlayerInput}
        />
        <Keyboard
          updateAnswer={this.handleUpdate}
          deleteAnswer={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default Game;
