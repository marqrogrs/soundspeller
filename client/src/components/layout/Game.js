import React, { Component } from "react";
import { Howl } from "howler";

import Keyboard from "./Inputs/Keyboard";
import Answer from "./Inputs/Answer";

class Game extends Component {
  state = {
    words: [
      {
        word: "abandon",
        grap: "A,B,A,N,D,O,N",
        phon: "EY-B AE N D-AAN N",
        syll: "a.band.on"
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

  interval = (syll) => {
    let count = 0;

    setInterval(() => {
      console.log(syll.split(".")[count]);
      count += 1;

      if (count >= syll.split(".")) {
        clearInterval();
      }
    }, 1000);

    clearInterval();
  };

  componentDidMount() {
    switch (this.state.level) {
      default:
        this.interval(this.state.words[0].syll);
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
