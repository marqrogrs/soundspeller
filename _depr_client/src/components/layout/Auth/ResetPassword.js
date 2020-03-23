import React, { Component } from "react";
import Form from "./Form";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { display } = this.props;
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1>Reset password</h1>

          <Form display={display} />
        </div>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
