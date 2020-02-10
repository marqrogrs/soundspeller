import React, { Component } from "react";

import Question from "./Inputs/Question";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      playerAnswer: "",
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

  handleLevel = (e) => {
    const level = e.target;
    this.setState({ level: parseInt(level.innerText.replace("Level ", "")) });
    document
      .getElementsByClassName("btn-primary")[0]
      .classList.replace("btn-primary", "btn-outline-primary");

    level.classList.replace("btn-outline-primary", "btn-primary");
  };

  render() {
    return (
      <React.Fragment>
        <Question
          handleQuestions={this.handleQuestions}
          handleLevel={this.handleLevel}
        />
      </React.Fragment>
    );
  }
}

export default Home;
