import React, { Component } from "react";

import Question from "./Inputs/Question";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      playerWord: "",
      level: 1
    };
  }
  // Questions Component
  handleQuestions = (e) => {
    e.preventDefault();
    let textarea = document.getElementById("textarea").value.split(/[\s,]+/);

    this.setState({ words: textarea });

    this.state.words.length > 0
      ? this.props.history.push({
          pathname: `${process.env.PUBLIC_URL}/game`,
          state: this.state
        })
      : console.log("nope");
  };
  render() {
    return (
      <React.Fragment>
        <Question handleQuestions={this.handleQuestions} />
      </React.Fragment>
    );
  }
}

export default Home;
