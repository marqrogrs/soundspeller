import React from "react";
import Form from "./Form";

const ResetPassword = ({ display }) => {
  return (
    <React.Fragment>
      <div>
        <h1>Reset password</h1>
        <Form display={display} />
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
