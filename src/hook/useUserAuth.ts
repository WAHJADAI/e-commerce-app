import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";
import useAuthenticationContext from "./useAuthticationContext";
import { onSignIn, onSignUp } from "api/authentication";
export type InformationFormType = {
  email: string;
  password: string;
};

function useUserAuth() {
  const [informationForm, setInformationForm] = useState<InformationFormType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { onSetToken, onDeleteToken } = useAuthenticationContext();
  const [, setValue] = useLocalStorage("token");
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }));
  }

  async function onSubmitSignUpForm(email: string, password: string) {
    //setValue(email);
    //onSetToken(email);
    //navigate(0);
    await onSignUp({ email, password });
  }

  async function onSubmitSignInForm(email: string, password: string) {
    await onSignIn({ email, password });
  }

  function onSignOut() {
    onDeleteToken();
    navigate(0);
  }
  return {
    informationForm,
    setInformationForm,
    onSubmitSignUpForm,
    onSubmitSignInForm,
    onHandleChangeInformationForm,
    onSignOut,
  };
}

export default useUserAuth;
