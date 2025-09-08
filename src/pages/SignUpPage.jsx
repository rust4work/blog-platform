import React from "react";
import Typography from "../components/helpers/Typography";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";

function SignUpPage() {
  return (
    <div className="signup--wrapper">
      <Typography variant="h1">Sign Up</Typography>
      <Input placeholderText="UserName" width="480px" height="48px" />
      <Input placeholderText="Email address" width="480px" height="48px" />
      <Input placeholderText="Password" width="480px" height="48px" />
      <Input placeholderText="Repeat Password" width="480px" height="48px" />
      <Button variant="primary-large" withIcon={false}>
        Sign up
      </Button>
    </div>
  );
}

export default SignUpPage;
