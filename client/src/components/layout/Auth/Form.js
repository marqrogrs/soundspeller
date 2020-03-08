import React from "react";

function Form({ email, password, auth, handleChange }) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="email">Type your Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group ">
        <label htmlFor="password">Type your Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={auth ? "Log In" : "Register"}
          className="btn btn-primary"
        />
      </div>
    </React.Fragment>
  );
}

export default Form;
