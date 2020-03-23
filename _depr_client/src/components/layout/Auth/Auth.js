import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { Alert } from "react-bootstrap";
import Form from "./Form";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      errors: "",
      auth: true // true === log in false === register
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
      .catch((error) => {
        console.log(`${type} error`, error);

        this.setState({ errors: error.response.data.message });
      });

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

  handleClose = () => {
    this.setState({ errors: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password, name, auth, errors } = this.state;
    return (
      <React.Fragment>
        <div className="jumbotron">
          {errors && (
            <Alert variant={"danger"} onClose={this.handleClose} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>{errors}</p>
            </Alert>
          )}
          <form onSubmit={this.handleSubmit}>
            {auth ? (
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
            ) : (
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

          <NavLink to={"/reset"}>Forgot Password?</NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;
