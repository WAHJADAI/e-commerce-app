import { InformationFormType } from "hook/useUserAuth";
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
  padding: 15px;
  ::placeholder {
    color: transparent;
  }
  :placeholder-shown ~ Label {
    position: absolute;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 15px;
    transition: 0.2s;
    color: black;
  }
  :focus {
    ~ Label {
      position: absolute;
      margin: 0;
      margin-left: 10px;
      font-size: 15px;
      transition: 0.2s;
      color: black;
    }
  }
`;

const Label = styled.label`
  font-family: "Sofia Sans", sans-serif;
  position: absolute;

  transition: 0.2s;
  color: transparent;
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

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type FormTemplatePropTypes = {
  title: string;
  email: string;
  password: string;
  onChange: (value: string, type: keyof InformationFormType) => void;
  onSubmit: (email: string, password: string) => void;
};

type UserAuthenticateType = {
  email: string;
  password: string;
};

function FormTemplate({ title, onSubmit, email, password, onChange }: FormTemplatePropTypes) {
  const emailId = useId();
  const passwordId = useId();

  return (
    <Container>
      <div>
        <TitleText>{title}</TitleText>
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        <Input
          type='email'
          id={emailId}
          name=''
          required
          value={email}
          onChange={(e) => {
            onChange(e.target.value, "email");
          }}
          placeholder='Email'
        />
        <Label htmlFor={emailId}>Email</Label>
        <WrapperInput>
          <Input
            type='password'
            id={passwordId}
            name=''
            required
            minLength={6}
            value={password}
            onChange={(e) => {
              onChange(e.target.value, "password");
            }}
            placeholder='Password'
          />
          <Label htmlFor={passwordId}>Password</Label>
        </WrapperInput>

        <Button type='submit'>
          <i className='fa-solid fa-arrow-right'></i>
        </Button>
      </Form>
    </Container>
  );
}

export default FormTemplate;
