import React, { ComponentProps } from "react";
import styled from "styled-components";
import FormTemplate from "components/FormTemplate";
import useUserAuth from "hook/useUserAuth";

const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  gap: 1.275rem;
`;

function SignUp() {
  const { onSubmitForm, informationForm, onHandleChangeInformationForm } = useUserAuth();
  return (
    <WrapperForm>
      <FormTemplate
        title={"Sign Up"}
        onSubmit={(email: string, password: string) => onSubmitForm(email, password)}
        email={informationForm.email}
        password={informationForm.password}
        onChange={(value, type) => {
          onHandleChangeInformationForm(value, type);
        }}
      ></FormTemplate>
    </WrapperForm>
  );
}
export default SignUp;
