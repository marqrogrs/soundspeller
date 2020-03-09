import React from "react";
import PropTypes from "prop-types";

function Form({ value, handleChange, display, minLength }) {
  return (
    <React.Fragment>
      {display === "name" && (
        <React.Fragment>
          <div className="form-group">
            <label htmlFor="name">Type your Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={value}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
        </React.Fragment>
      )}

      {display === "email" && (
        <React.Fragment>
          <div className="form-group">
            <label htmlFor="email">Type your Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={value}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
        </React.Fragment>
      )}

      {display === "password" && (
        <React.Fragment>
          <div className="form-group ">
            <label htmlFor="password">Type your Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={value}
              placeholder="Password"
              onChange={handleChange}
              required
              minLength="8"
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Form.propType = {
  display: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func
};

Form.defaultProps = {
  minLength: 8
};

export default Form;
