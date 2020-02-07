import React, { Component } from "react";
import { Howl } from "howler";

import Layout from "./Inputs/Keyboard";
import Answer from "./Inputs/Answer";

class Game extends Component {
  state = this.props.location.state;

  letters = null;
  syllabes = null;

  count = 0;

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

  syllabify = (words) => {
    // const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    const syllableRegex = /((?:(a)|(e)|(i)|(o)|(u))+)|(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy])?|(.))/gi;
    this.syllabes = words.match(syllableRegex).filter((el) => el !== "");
  };

  // Answer Function
  handlePlayerInput = (e) => {
    this.setState({ playerWord: e.target.value });
  };

  speak = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  // chain sound

  howl = (syllabes) => {
    const sources = [];

    syllabes.map((s) => {
      try {
        sources.push(require(`./../audio/${s}.mp3`));
      } catch (error) {
        try {
          s.split("").map((s) => sources.push(require(`./../audio/${s}.mp3`)));
        } catch (error) {
          console.log(error);
        }
      }
      return null;
    });

    const onEnd = () => {
      this.count += 1;

      try {
        howler[this.count].play();
      } catch (error) {
        howler[this.count - 1].unload();
      }
    };

    // build howler
    const howler = [];

    sources.map((source) =>
      howler.push(new Howl({ src: source, onend: onEnd }))
    );

    try {
      howler[0].play();
    } catch (error) {}
  };

  componentWillMount() {
    this.letters = ["a", "b", "c"];
  }

  componentDidMount() {
    this.syllabify(this.state.words[0]);
    this.howl(this.syllabes);
  }

  render() {
    const letters = this.letters;
    return (
      <React.Fragment>
        <Answer
          placeholder={"Type the word"}
          handleWord={this.handlePlayerInput}
        />
        <Layout onKeyPress={this.onKeyPress} letters={letters} />
      </React.Fragment>
    );
  }
}

export default Game;
