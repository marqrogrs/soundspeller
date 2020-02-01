import React from "react";

const Question = ({ handleQuestions }) => {
  return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label htmlFor="words">Type some words</label>
          <textarea
            id="textarea"
            name="words"
            className="form-control"
            required
          ></textarea>
          <label htmlFor="submit"></label>
          <input
            type="submit"
            value="Play"
            className="form-control btn btn-primary mt-5"
            onClick={handleQuestions}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Question;
