import React, { ComponentProps, useEffect } from "react";
import FormTemplate from "components/FormTemplate";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useUserAuth from "hook/useUserAuth";
import useAuthenticationContext from "hook/useAuthticationContext";
import Loading from "components/Loading";
import useLoadingContext from "hook/useLoadingContext";

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
  const { onSubmitSignInForm, informationForm, onHandleChangeInformationForm } = useUserAuth();
  const { token } = useAuthenticationContext();
  const { isLoading } = useLoadingContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
    return () => {};
  }, [token]);
  return (
    <WrapperForm>
      {isLoading && <Loading></Loading>}
      <FormTemplate
        title={"Sign In"}
        onSubmit={(email: string, password: string) => onSubmitSignInForm(email, password)}
        email={informationForm.email}
        password={informationForm.password}
        onChange={(value, type) => {
          onHandleChangeInformationForm(value, type);
        }}
      ></FormTemplate>
      <LinkSignUp to='/SignUp'>CREATE ACCOUNT</LinkSignUp>
    </WrapperForm>
  );
}

export default SignIn;
