import React, { ComponentProps } from "react";
import FormTemplate from "components/FormTemplate";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  gap: 1.275rem;
`;

const LinkSignUp = styled(Link)`
  text-decoration: none;
  color: #152d73;
  :hover {
    color: #d4d4d8;
  }
`;

function SignIn() {
  const handleSignIn: ComponentProps<typeof FormTemplate>["onSubmit"] = (email, password) => {
    console.log("🚗:", email, password);
  };
  return (
    <WrapperForm>
      <FormTemplate
        title={"Sign In"}
        onSubmit={(email: string, password: string) => handleSignIn(email, password)}
      ></FormTemplate>
      <LinkSignUp to='/SignUp'>CREATE ACCOUNT</LinkSignUp>
    </WrapperForm>
  );
}

export default SignIn;
