import React from "react";
import PropTypes from "prop-types";

const Word = ({ placeholder, handleWord }) => {
  return (
    <React.Fragment>
      <label htmlFor="Word">
        <input
          type="text"
          name="Word"
          className="form-control form-control-lg"
          placeholder={placeholder}
          onChange={handleWord}
        />
      </label>
    </React.Fragment>
  );
};

Word.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleWord: PropTypes.func
};

export default Word;
