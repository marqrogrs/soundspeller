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

    if (!this.state.auth) {
      data["name"] = this.state.name;
    }

    axios
      .post(route, data, { withCredentials: true })
      .then((res) => {
        console.log(`${type} respons`, res);
        this.props.history.push(redirect);
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
                <Form
                  value={name}
                  display="name"
                  handleChange={this.handleChange}
                />
                <Form
                  value={email}
                  display="email"
                  handleChange={this.handleChange}
                />
                <Form
                  display="password"
                  value={password}
                  handleChange={this.handleChange}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Form
                  display="email"
                  value={email}
                  handleChange={this.handleChange}
                />
                <Form
                  display="password"
                  value={password}
                  handleChange={this.handleChange}
                />
              </React.Fragment>
            )}

            <div className="form-group">
              <input
                type="submit"
                value={auth ? "Log In" : "Register"}
                className="btn btn-primary"
              />
            </div>
          </form>
          <input
            type="button"
            onClick={this.handleRegister}
            value={!auth ? "Log In" : "Register"}
            className="btn btn-primary"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;
