import React from "react";
import PropTypes from "prop-types";

const Answer = ({ placeholder, handleWord }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="Answer">Type your Answer</label>
        <input
          type="text"
          name="Answer"
          id="answer"
          className="form-control"
          placeholder={placeholder}
          onChange={handleWord}
        />
      </div>

      <div className="form-group">
        <label htmlFor="out">
          <input type="text" name="out" id="out" className="form-control" />
        </label>
      </div>
    </React.Fragment>
  );
};

Answer.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleWord: PropTypes.func
};

export default Answer;
