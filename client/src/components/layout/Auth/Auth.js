import React, { Component } from "react";
import axios from "axios";

import Form from "./Form";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      errors: "",
      auth: true
    };
  }

  handleRegister = () => {
    this.setState({ auth: !this.state.auth });
  };

  handleAuth = (route, redirect, type) => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    if (this.state.auth === false) {
      data["name"] = this.state.name;
    }

    axios
      .post(route, data, { withCredentials: true })
      .then((res) => {
        console.log(`${type} respons`, res);
        this.props.history.push(redirect);
        this.props.setAuthentificated(true);
      })
      .catch((error) => console.log(`${type} error`, error));

    console.log("Form Submited");
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.auth
      ? this.handleAuth(
          "http://localhost:5000/api/user/login",
          "/home",
          "login"
        )
      : this.handleAuth(
          "http://localhost:5000/api/user/register",
          "/home",
          "register"
        );
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password, name, auth } = this.state;
    return (
      <React.Fragment>
        <div className="jumbotron">
          <form onSubmit={this.handleSubmit}>
            {!auth ? (
              <React.Fragment>
                <div className="form-group">
                  <label htmlFor="name">Type your Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <Form
                  auth={auth}
                  email={email}
                  password={password}
                  handleChange={this.handleChange}
                />

                <input
                  type="button"
                  onClick={this.handleRegister}
                  value="Log In"
                  className="btn btn-primary"
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Form
                  email={email}
                  auth={auth}
                  password={password}
                  handleChange={this.handleChange}
                />

                <input
                  type="button"
                  onClick={this.handleRegister}
                  value="Register"
                  className="btn btn-primary"
                />
              </React.Fragment>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;
