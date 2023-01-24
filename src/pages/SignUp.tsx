import React, { ComponentProps } from "react";
import styled from "styled-components";
import FormTemplate from "components/FormTemplate";

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
  const handleSignIn: ComponentProps<typeof FormTemplate>["onSubmit"] = (email, password) => {
    console.log("🚗:", email, password);
  };
  return (
    <WrapperForm>
      <FormTemplate
        title={"Sign Up"}
        onSubmit={(email: string, password: string) => handleSignIn(email, password)}
      ></FormTemplate>
    </WrapperForm>
  );
}
export default SignUp;
