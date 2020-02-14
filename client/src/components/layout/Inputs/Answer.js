import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Answer = ({ placeholder, handlePlayerInput }) => {
  // const sleep = async (milliseconds) => {
  //   var start = new Date().getTime();
  //   for (var i = 0; i < 1e7; i++) {
  //     if (new Date().getTime() - start > milliseconds) {
  //       break;
  //     }
  //   }
  // };
  const wordDisplay = async (syll) => {
    syll.split(".").map((s) => {
      console.log(s);
      document.getElementById("answer").value += s;
      // sleep(100000);
    });
  };

  useEffect(() => {
    // console.log(keyboard.current.getButtonElement("a"));
    const timeoutID = setTimeout(() => {}, 1000);
  });
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="Answer">Type your Answer</label>
        <input
          name="Answer"
          id="answer"
          className="form-control"
          placeholder={placeholder}
          onChange={handlePlayerInput}
        />
      </div>
    </React.Fragment>
  );
};

Answer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handlePlayerInput: PropTypes.func
};

export default Answer;
