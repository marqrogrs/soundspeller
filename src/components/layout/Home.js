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
  check = () => {
    this.state.words.length > 0
      ? this.props.history.push({
          pathname: `${process.env.PUBLIC_URL}/game`,
          state: this.state
        })
      : console.log("nope");
  };

  handleQuestions = (e) => {
    e.preventDefault();
    let textarea = document.getElementById("textarea").value.split(/[\s,]+/);

    if (textarea.includes("")) {
      textarea = textarea.filter((i) => {
        return i !== "";
      });
    }

    this.setState({ words: textarea });
    setTimeout(this.check, 100);
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
