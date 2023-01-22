import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type FormTemplatePropTypes = {
  title: string;
  onSummit: (emil: string, password: string) => void;
};

type UserAuthenticateType = {
  email: string;
  password: string;
};

function FormTemplate({ title, onSummit }: FormTemplatePropTypes) {
  const emailId = useId();
  const passwordId = useId();

  const [useAuthenticate, setUseAuthenticate] = useState<UserAuthenticateType>({
    email: "",
    password: "",
  });

  return (
    <div>
      <div>
        <title>{title}</title>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSummit(useAuthenticate.email, useAuthenticate.password);
        }}
      >
        <label htmlFor={emailId}>
          Email
          <input
            type={emailId}
            id={emailId}
            name=''
            required
            value={useAuthenticate.email}
            onChange={(e) => {
              setUseAuthenticate((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </label>

        <label htmlFor={passwordId}>
          Password
          <input
            type={passwordId}
            id={passwordId}
            name=''
            required
            value={useAuthenticate.password}
            onChange={(e) => setUseAuthenticate((prev) => ({ ...prev, password: e.target.value }))}
          />
        </label>
        <button type='submit'>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </form>
      <Link to='/SignUp'>CREATE ACCOUNT</Link>
    </div>
  );
}

export default FormTemplate;
