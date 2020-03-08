import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const withAuth = (ComponentToProtect) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      };
    }
    componentDidMount() {
      axios
        .get("http://localhost:5000/api/user/verify", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            this.setState({ redirect: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({ redirect: true });
        });
    }
    render() {
      const { redirect } = this.state;

      if (redirect) {
        return <Redirect to="/" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
};

export default withAuth;
