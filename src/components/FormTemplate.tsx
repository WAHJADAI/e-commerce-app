import React from "react";
import styled from "styled-components";

type Props = {};

function FormTemplate({}: Props) {
  return (
    <div>
      <div>
        <title>SignIN</title>
      </div>
      <form>
        <label htmlFor='email'>
          Email
          <input type='email' id='email' name='' />
        </label>

        <label htmlFor='password'>
          Password
          <input type='password' id='password' name='' />
        </label>
      </form>
    </div>
  );
}

export default FormTemplate;
