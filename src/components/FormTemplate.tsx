import React, { useId, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  padding: 2rem;
  gap: 2rem;
`;

const TitleText = styled.span`
  font-family: "Sofia Sans", sans-serif;
  font-size: 2rem;
  color: #60a5fa;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #152d73;
`;

const Label = styled.label`
  font-family: "Sofia Sans", sans-serif;
`;

const Button = styled.button`
  border: none;
  background-color: bisque;
  padding: 20px;
  border-radius: 10px;
  margin: 2rem;
  :hover {
    background-color: #98c5fc;
  }
`;

type FormTemplatePropTypes = {
  title: string;
  onSubmit: (emil: string, password: string) => void;
};

type UserAuthenticateType = {
  email: string;
  password: string;
};

function FormTemplate({ title, onSubmit: onSummit }: FormTemplatePropTypes) {
  const emailId = useId();
  const passwordId = useId();

  const [useAuthenticate, setUseAuthenticate] = useState<UserAuthenticateType>({
    email: "",
    password: "",
  });

  return (
    <Container>
      <div>
        <TitleText>{title}</TitleText>
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSummit(useAuthenticate.email, useAuthenticate.password);
        }}
      >
        <Label htmlFor={emailId}>
          Email
          <Input
            type={emailId}
            id={emailId}
            name=''
            required
            value={useAuthenticate.email}
            onChange={(e) => {
              setUseAuthenticate((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </Label>

        <Label htmlFor={passwordId}>
          Password
          <Input
            type={passwordId}
            id={passwordId}
            name=''
            required
            minLength={6}
            value={useAuthenticate.password}
            onChange={(e) => setUseAuthenticate((prev) => ({ ...prev, password: e.target.value }))}
          />
        </Label>
        <Button type='submit'>
          <i className='fa-solid fa-arrow-right'></i>
        </Button>
      </Form>
    </Container>
  );
}

export default FormTemplate;
