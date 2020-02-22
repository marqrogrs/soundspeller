import React, { Component } from "react";
import { Howl } from "howler";

import Keyboard from "./Inputs/Keyboard";
import Answer from "./Inputs/Answer";

class Game extends Component {
  state = {
    words: [
      {
        word: "abandon",
        grap: "A,AR,D,V,AR,K,S",
        phon: "EY-B AE N D-AAN N",
        syll: "aard.vark.s"
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
    e.grap = this.state.words[0].grap.split(",").splice(index, e.syll.length);
    if (e.grap.length > 1) {
      if (e.grap.join("").toLowerCase() !== e.syll) {
        console.log(e.syll, e.grap);
      }
    }
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
